using ChiengPlannerVue.Models;
using Microsoft.Extensions.Configuration;
using System.Reflection;
using Microsoft.EntityFrameworkCore;
using ChiengPlannerVue;
using ChiengPlannerVue.Services.Interfaces;
using ChiengPlannerVue.Services;
using ChiengPlannerVue.Models.Users;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using ChiengPlannerVue.Utils;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
    .AddUserSecrets(Assembly.GetExecutingAssembly(), true)
    .AddEnvironmentVariables();

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<ChiengPlannerContext>(options =>
            options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultDBConnection")));
builder.Services.AddDbContext<ApplicationContext>(options =>
            options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultDBConnection")));
builder.Services.AddTransient<INotesService, NotesService>();
builder.Services.AddTransient<IChecklistsService, ChecklistsService>();
builder.Services.AddTransient<IUserService, UserService>();
builder.Services.Configure<AzureConnection>(builder.Configuration.GetSection("AzureConnection"));
builder.Services.AddIdentity<User, Role>()
    .AddEntityFrameworkStores<ApplicationContext>()
    .AddRoleStore<RoleStore<Role, ChiengPlannerContext, int, UserRole, RoleClaim>>()
    .AddDefaultTokenProviders();

builder.Services.Configure<IdentityOptions>(options =>
{
    options.SignIn.RequireConfirmedEmail = false;
    options.SignIn.RequireConfirmedPhoneNumber = false;

    options.Lockout.MaxFailedAccessAttempts = 150;
    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.Zero;

    options.Password.RequireDigit = false;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase = false;
}

);

builder.Services.ConfigureApplicationCookie(options =>
{
    options.LoginPath = "/Account/SignIn";
    options.LogoutPath = "/Account/SignOut";
    options.Cookie.HttpOnly = true;
    // options.ExpireTimeSpan = TimeSpan.FromMinutes(30);
    options.Cookie.MaxAge = TimeSpan.FromHours(24);
    options.AccessDeniedPath = "/Account/AccessDenied";
    options.Cookie.Name = "ChiengPlanner.Identity";
}

);

builder.Services.Configure<DataProtectionTokenProviderOptions>(options =>
{
    options.TokenLifespan = TimeSpan.FromHours(100);
}

);

// Run pending migrations

//using (var serviceScope = builder.Services.BuildServiceProvider().GetRequiredService<IServiceScopeFactory>().CreateScope())
//{
//    ApplicationContext dbContext = serviceScope.ServiceProvider.GetService<ApplicationContext>();
//    try
//    {
//        if (!dbContext.AllMigrationsApplied())
//        {
//            dbContext.Database.Migrate();
//        }
//        dbContext.EnsureSeeded();

//    }
//    catch (Exception ex)
//    {
//    }
//}


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
