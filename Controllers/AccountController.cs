using ChiengPlannerVue.Models;
using ChiengPlannerVue.Models.Users;
using ChiengPlannerVue.Services.Interfaces;
using ChiengPlannerVue.Utils;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace ChiengPlannerVue.Controllers
{
    [Authorize]
    public class AccountController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly IUserService _userService;
        private readonly SignInManager<User> _signInManager;
        private ChiengPlannerContext _context;

        public AccountController(ChiengPlannerContext context, UserManager<User> userManager, SignInManager<User> signInManager, IUserService userService)
        {
            _context = context;
            _userManager = userManager;
            _signInManager = signInManager;
            _userService = userService;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> SignIn(string? returnurl = null)
        {
            if (HttpContext.User is not null)
            {
                if (HttpContext.User.Identity.IsAuthenticated)
                {
                    if (string.IsNullOrEmpty(returnurl))
                        return RedirectToAction("AllIndex", "CLG");
                    else
                        return Redirect(returnurl);
                }
                    
                await HttpContext.SignOutAsync(IdentityConstants.ExternalScheme);
            }
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> SignIn(SignInViewModel model, string? returnUrl = null)
        {
            string message;
            if (!ModelState.IsValid)
            {
                message = "Please enter valid information";
                model.AddError(message);
                return View(model);
            }

            if (String.IsNullOrEmpty(returnUrl))
            {
                // TO-DO
                returnUrl = "";
            }
            User? user = null;

            user = await _userManager.FindByNameAsync(model.UserName);
            if (user != null)
            {

                if (!user.IsActive)
                {
                    message = "Your account is not active. Please contact me at obboochieng@gmail.com";
                    model.AddError(message);
                    return View(model);
                }
                //    Eventually Implement
                //if (!_userManager.IsEmailConfirmedAsync(user).Result)
                //{

                //    message = "Your email is not confirmed. Please confirm your email and try again.";
                //    model.AddError(message);
                //    string confirmationToken = _userManager.GenerateEmailConfirmationTokenAsync(user).Result;
                //    string confirmationLink = Url.Action("ConfirmEmail", "Account", new
                //    {
                //        userid = user.Id,
                //        token = confirmationToken
                //    },
                //       protocol: HttpContext.Request.Scheme);

                //    await _emailSender.SendEmailAsync(user.Email,
                //                                     "Important: STLPG_Review Confirm your email address",
                //                                     "You're almost done — just click the link below to" +
                //                                     " verify your email address and you're all set.<br /> " +
                //                                     "Then, you can use your email address as your " +
                //                                     " STLPG_Review username to log in to your account online <br /> "
                //                                     + "<a href = " + confirmationLink + " target=\"_blank\">Verify My Email Address</a>" + "<br /><br />" +
                //                                     "<div style='background-color:#f0f0f0;'>Please do not reply to this email, it is not monitored. If you'd like to <br />" +
                //                                     "contact us, please visit our website here. STLPG_Review respects your privacy <br />" +
                //                                     "All trademarks are the property of their respective owners</div>");
                //    return View(model);
                //}
                var result = await _signInManager.PasswordSignInAsync(user, model.Password, true, false);

                if (result.Succeeded)
                {
                    // TO-DO: Add logging
                    // _audit.AddLogSingIn(user, message, true);
                    var roles = _userManager.GetRolesAsync(user).Result;
                    await HttpContext.SignInApplicationAsync(IdentityConstants.ApplicationScheme, user, roles.ToList());
                    return RedirectToAction("Index", "Home");
                }
                else
                {
                    message = "Invalid password";
                }
            }

            message = "Invalid username or password.";
            model.AddError(message);
            return View(model);
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> SignOut()
        {
            await HttpContext.SignOutAsync(IdentityConstants.ApplicationScheme);
            return View();
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> Register()
        {
            var vm = new RegisterViewModel()
            {
                IsEditMode = false
            };
            return View(vm);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Register(RegisterViewModel model, string returnurl = null)
        {
            if (ModelState.IsValid)
            {
                var user = new User
                {
                    UserName = model.UserName,
                    FirstName = model.FirstName,
                    LastName = model.LastName
                };
                try
                {
                    var result = await _userManager.CreateAsync(user, model.Password);
                    if (result.Succeeded)
                    {
                        var savedUserRecord = await _userManager.FindByNameAsync(model.UserName);

                        //TO-DO: Email Confirmation and 2FA
                        //string confirmationToken = _userManager.GenerateEmailConfirmationTokenAsync(user).Result;

                        //string confirmationLink = Url.Action("ConfirmEmail", "Account", new
                        //{
                        //    userid = user.Id,
                        //    token = confirmationToken
                        //},
                        //   protocol: HttpContext.Request.Scheme);

                        //await _emailSender.SendEmailAsync(user.Email,
                        //                                 "Important: STLPG_Review Confirm your email address",
                        //                                 "You're almost done — just click the link below to" +
                        //                                 " verify your email address and you're all set.<br /> " +
                        //                                 "Then, you can use your email address as your " +
                        //                                 " STLPG_Review username to log in to your account online <br /> "
                        //                                 + "<a href = " + confirmationLink + " target=\"_blank\">Verify My Email Address</a>" + "<br /><br />" +
                        //                                 "<div style='background-color:#f0f0f0;'>Please do not reply to this email, it is not monitored. If you'd like to <br />" +
                        //                                 "contact us, please visit our website here. STLPG_Review respects your privacy <br />" +
                        //                                 "All trademarks are the property of their respective owners</div>");
                        _userService.AddToOldPasswords(savedUserRecord, savedUserRecord.PasswordHash);
                        return RedirectToAction("SignIn", "Account", new {returnUrl = returnurl});
                    }
                    else
                    {
                        AddErrors(result, model);
                    }
                }
                catch (Exception ex) { }
            }
            else
            {
                model.AddError("Failed to register user. Please try again later.");
            }
            return View(model);

        }

        private void AddErrors(IdentityResult result, ViewModelBase vm)
        {
            foreach(var error in result.Errors)
            {
                vm.AddError(error.Description);
            }
        }
        /*
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ResetPassword()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> ResetPassword()
        {
            return View();
        }

        [AllowAnonymous]
        public ActionResult AccessDenied()
        {
            return View();
        }
        */

        private bool IsPreviousPassword()
        {
            return true;
        }
    }
}
