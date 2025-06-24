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
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Authentication.Cookies;

var builder = WebApplication.CreateBuilder(args);

using ILoggerFactory factory = LoggerFactory.Create(builder => builder.AddConsole());
ILogger logger = factory.CreateLogger("Program");

builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
    .AddUserSecrets(Assembly.GetExecutingAssembly(), true)
    .AddEnvironmentVariables();

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<ChiengPlannerContext>(options =>
            options.UseSqlite(builder.Configuration["DBConnectionSqlite"]));
logger.LogInformation(string.Format("Connecting to SQLite DB Using Connection String: {0}", builder.Configuration["DBConnectionSqlite"]));
builder.Services.AddTransient<INotesService, NotesService>();
builder.Services.AddTransient<IChecklistsService, ChecklistsService>();
builder.Services.AddTransient<IUserService, UserService>();
builder.Services.AddIdentity<User, Role>()
    .AddEntityFrameworkStores<ChiengPlannerContext>()
    .AddUserManager<UserManager<User>>()
    .AddUserStore<UserService>()
    .AddDefaultTokenProviders();

builder.Services.Configure<SecurityStampValidatorOptions>(o => o.ValidationInterval = TimeSpan.FromHours(double.Parse(builder.Configuration["SecurityValidationTimeSpan"])));

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
    options.SlidingExpiration = true;
    options.ExpireTimeSpan = TimeSpan.FromMinutes(double.Parse(builder.Configuration["IdleTimeout"]));
    options.Cookie.MaxAge = TimeSpan.FromHours(double.Parse(builder.Configuration["MaxCookieAge"]));
    options.AccessDeniedPath = "/Account/AccessDenied";
    options.Cookie.Name = ".ChiengPlanner.Identity";
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


builder.Services.AddMemoryCache();

builder.Services.AddDistributedMemoryCache();

builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(double.Parse(builder.Configuration["IdleTimeout"]));
    options.Cookie.IsEssential = true;
    options.Cookie.HttpOnly = true;
    options.Cookie.Name = ".ChiengPlanner.SessionCookie";
});

var message = "";

builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>
    {
        options.Cookie.Name = ".ChiengPlanner.Identity.Authentication";
        options.Cookie.MaxAge = TimeSpan.FromHours(double.Parse(builder.Configuration["MaxCookieAge"]));
        options.SlidingExpiration = true;
        options.LoginPath = "/Account/SignIn/";
        options.AccessDeniedPath = "/Account/SignOut/";
        options.ExpireTimeSpan = TimeSpan.FromMinutes(double.Parse(builder.Configuration["IdleTimeout"]));
    });
//            .AddJwtBearer(x =>
//            {
//                x.RequireHttpsMetadata = false;
//                x.SaveToken = true;
//                x.TokenValidationParameters = new TokenValidationParameters
//                {
//                    ValidateIssuer = true,
//                    ValidateAudience = false,
//                    ValidateIssuerSigningKey = true,
//                    ValidIssuer = builder.Configuration["Jwt:Issuer"],
//                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("Jwt:Key"))
//                };
//                x.Events = new JwtBearerEvents
//                {
//                    OnAuthenticationFailed = ctx =>
//                    {
//                        ctx.Response.StatusCode = StatusCodes.Status401Unauthorized;
//                        message += "From OnAuthenticationFailed:\n";
//                        message += ChiengPlannerVue.Utils.ExceptionUtilityFunctions.FlattenException(ctx.Exception);
//                        logger.LogInformation(message);
//                        return Task.CompletedTask;
//                    },

//                    OnChallenge = ctx =>
//                    {
//                        message += "From OnChallenge:\n";
//                        ctx.Response.StatusCode = StatusCodes.Status401Unauthorized;
//                        ctx.Response.ContentType = "text/plain";
//                        logger.LogInformation(message);
//                        return ctx.Response.WriteAsync(message);
//                    },

//                    OnMessageReceived = ctx =>
//                    {
//                        message = "From OnMessageReceived:\n";
//                        ctx.Request.Headers.TryGetValue("Authorization", out var BearerToken);
//                        if (BearerToken.Count == 0)
//                            BearerToken = "no Bearer token sent\n";
//                        message += "Authorization Header sent: " + BearerToken + "\n";
//                        return Task.CompletedTask;
//                    },
//                    OnTokenValidated = ctx =>
//                    {
//                        logger.LogInformation("token: " + ctx.SecurityToken.ToString());
//                        return Task.CompletedTask;
//                    }
//                };
//            });




builder.Services.AddAuthorization();

builder.Services.Configure<DataProtectionTokenProviderOptions>(options =>
{
    options.TokenLifespan = TimeSpan.FromHours(100);
}
);

//builder.Services.AddDataProtection()
//    .PersistKeysToDbContext<ChiengPlannerContext>()
//    .SetDefaultKeyLifetime(TimeSpan.FromDays(30));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}

// turn on PII logging
// Microsoft.IdentityModel.Logging.IdentityModelEventSource.ShowPII = true;

app.UseHttpsRedirection();
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
app.UseAuthentication();
app.UseAuthorization();
app.UseSession();

app.MapRazorPages();

//app.UseHttpsRedirection();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
