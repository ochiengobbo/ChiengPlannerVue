using ChiengPlannerVue.Models;
using Microsoft.Extensions.Configuration;
using System.Reflection;
using Microsoft.EntityFrameworkCore;
using ChiengPlannerVue;
using ChiengPlannerVue.Services.Interfaces;
using ChiengPlannerVue.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
    .AddUserSecrets(Assembly.GetExecutingAssembly(), true)
    .AddEnvironmentVariables();

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<ChiengPlannerContext>(options =>
            options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultDBConnection")));
builder.Services.AddTransient<INotesService, NotesService>();
builder.Services.AddTransient<IChecklistsService, ChecklistsService>();
builder.Services.Configure<AzureConnection>(builder.Configuration.GetSection("AzureConnection"));

if (builder.Environment.IsDevelopment())
{
    builder.Services.AddMvc().AddSessionStateTempDataProvider().AddRazorRuntimeCompilation();
}
else
{
    builder.Services.AddMvc().AddSessionStateTempDataProvider();
}

builder.Services.AddSession();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}

app.UseStaticFiles(new StaticFileOptions
{
    OnPrepareResponse = context =>
    {
        var headers = context.Context.Response.Headers;
        var contentType = headers["Content-Type"];
        if (contentType == "application/x-gzip")
        {
            if (context.File.Name.EndsWith("js.gz"))
            {
                contentType = "application/javascript";
            }
            else if (context.File.Name.EndsWith("css.gz"))
            {
                contentType = "text/css";
            }

            headers.Add("Content-Encoding", "gzip");
            headers["Content-Type"] = contentType;
        }
    }
});

app.UseRouting();

app.UseAuthorization();

app.UseSession();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
