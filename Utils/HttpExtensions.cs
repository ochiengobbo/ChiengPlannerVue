using ChiengPlannerVue.Models.Users;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Newtonsoft.Json;
using System.Security.Claims;
using System.Text;

namespace ChiengPlannerVue.Utils
{
    public static class HttpExtensions
    {


        public static IEnumerable<T> OrEmptyIfNull<T>(this IEnumerable<T> source)
        {
            return source ?? Enumerable.Empty<T>();
        }

        public static void HideSideNav(this ViewDataDictionary viewData)
        {
            viewData[Constants.HideSideNavKey] = true;
        }


    }

    public static class TempDataExtensions
    {
        public static void Put<T>(this ITempDataDictionary tempData, string key, T value) where T : class
        {
            tempData[key] = JsonConvert.SerializeObject(value, Formatting.Indented, new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
        }

        public static T Get<T>(this ITempDataDictionary tempData, string key) where T : class
        {
            tempData.TryGetValue(key, out object o);
            return o == null ? null : JsonConvert.DeserializeObject<T>((string)o);
        }
    }

    public static class HtmlHelperExtensions
    {
        public static string CurrentPageName(this IHtmlHelper html)
        {
            string path = ((RazorView)html.ViewContext.View).Path;
            string[] tokens = path.Split("/");
            return tokens[^2];
        }

        public static string CurrentActionName(this IHtmlHelper html)
        {
            return html.ViewContext.RouteData.Values["action"].ToString();
        }

        public static string CurrentControllerName(this IHtmlHelper html)
        {
            return html.ViewContext.RouteData.Values["controller"].ToString();
        }

        public static string CurrentViewName(this IHtmlHelper html)
        {
            return Path.GetFileNameWithoutExtension(((RazorView)html.ViewContext.View).Path);
        }

    }

    public static class HttpAuthenticationExtension
    {
        public static async Task SignInApplicationAsync(this HttpContext context, string scheme, User user, List<string> roles)
        {
            string roleDisplay = GetRoleDisplay(roles);
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name,
                          user.UserName),
                new Claim(ClaimTypes.Email, user.Email ?? string.Empty),
                new Claim(Constants.ClaimTypeFirstName, user.FirstName ?? user.UserName),
                new Claim(Constants.ClaimTypeLastName, user.LastName ?? string.Empty),
                new Claim(Constants.ClaimTypeIsActive, user.IsActive.ToString()),
                new Claim(Constants.ClaimTypeRole, roleDisplay ?? string.Empty),
                new Claim(Constants.ClaimTypeIdentifier, user.Id.ToString() ?? string.Empty),
                new Claim(Constants.FiscalYear, string.Empty),
            };


            foreach (var role in roles)
                claims.Add(new Claim(ClaimTypes.Role, role));

            var userIdentity = new ClaimsIdentity(claims, scheme);

            ClaimsPrincipal principal = new ClaimsPrincipal(userIdentity);
            await context.SignInAsync(scheme, principal);
            context.User = principal;
        }

        public static string GetLoggedInUser(this HttpContext context)
        {
            var username = context.User.FindFirst((ClaimTypes.Name));
            return (username != null) ? username.Value : string.Empty;
        }

        public static bool ContainsRole(this HttpContext context, string role)
        {
            var roles = context.User.FindAll(ClaimTypes.Role).Select(s => s.Value.ToLower()).ToList();
            return (roles != null && roles.Count > 0) ? roles.Contains(role.ToLower()) : false;
        }

        public static ClaimsPrincipal GetSignedInUser(this HttpContext context, string scheme)
        {
            var authResult = context.AuthenticateAsync(scheme);
            return authResult.IsCompleted ? authResult.Result.Principal : null;
        }

        public static List<string> GetUserRoles(this HttpContext context)
        {
            return context.User
                        .FindAll(ClaimTypes.Role)
                        .Select(s => s.Value)
                        .ToList();
        }
    }

    public static class ClaimPrincipalExtention
    {
        public static string GetClaimValueFor(this ClaimsPrincipal principal, string claimName)
        {
            var claim = principal.FindFirst(claimName);
            return claim != null ? claim.Value : string.Empty;
        }

        public static string GetFullName(this ClaimsPrincipal principal)
        {
            var username = principal.FindFirst(ClaimTypes.Name);
            return $"{principal.GetFirstName()} {principal.GetLastName()}";
        }

        public static string GetFirstName(this ClaimsPrincipal principal)
        {
            var firstNameClaim = principal.FindFirst(Constants.ClaimTypeFirstName);
            return firstNameClaim != null ? firstNameClaim.Value : string.Empty;
        }

        public static string GetLastName(this ClaimsPrincipal principal)
        {
            var lastNameClaim = principal.FindFirst(Constants.ClaimTypeLastName);
            return lastNameClaim != null ? lastNameClaim.Value : string.Empty;
        }

        public static string GetIdentifier(this ClaimsPrincipal principal)
        {
            var id = principal.FindFirst(Constants.ClaimTypeIdentifier);
            return id != null ? id.Value : string.Empty;
        }

        public static string GetUserName(this ClaimsPrincipal principal)
        {
            var username = principal.FindFirst(ClaimTypes.Name);
            return username != null ? username.Value : string.Empty;
        }


        public static string GetFiscalYear(this ClaimsPrincipal principal)
        {
            var fiscalYear = principal.FindFirst(Constants.FiscalYear);
            return fiscalYear != null ? fiscalYear.Value : DateTime.Now.Year.ToString();
        }

        public static bool IsActive(this ClaimsPrincipal principal)
        {
            var isActive = principal.FindFirst(Constants.ClaimTypeIsActive);

            return isActive != null ? Boolean.Parse(isActive.Value) : false;
        }

        public static string GetRoleType(this ClaimsPrincipal principal)
        {
            var roleType = principal.FindFirst(Constants.ClaimTypeRole);
            return roleType != null ? roleType.Value : string.Empty;
        }

        public static string GetUserId(this ClaimsPrincipal principal)
        {
            var userId = principal.FindFirst(Constants.UserID);

            if (userId != null)
            {
                return userId.Value;
            }
            return null;
        }
        public static IEnumerable<string> GetUserRole(this ClaimsPrincipal principal)
        {
            var userRole = principal.FindAll(Constants.ClaimTypeRole);

            if (userRole != null)
            {
                return from x in userRole select x.Value;
            }
            return null;
        }

        public static bool HasRole(this ClaimsPrincipal principal, params RoleType[] roleTypes)
        {
            foreach (var roleType in roleTypes)
            {
                var hasRole = principal.GetUserRole().Contains(roleType.GetDescription());
                if (hasRole) return true;
            }
            return false;
        }
    }
}
