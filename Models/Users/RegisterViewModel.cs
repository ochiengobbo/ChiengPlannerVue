using System.ComponentModel.DataAnnotations;
namespace ChiengPlannerVue.Models.Users
{
    public class RegisterViewModel : ViewModelBase
    {
        [Required(ErrorMessage = "First Name is Required")]
        [StringLength(50)]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "Last Name is Required")]
        [StringLength(50)]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "Email is Required")]
        [StringLength(75)]
        [RegularExpression(@"([\w\-\.]+)@([a-zA-z]+)\.([a-zA-z]+)", ErrorMessage = "You must use a valid Email")]
        [Display(Name = "Username")]
        public string UserName { get; set; }
        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 12)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }
        [DataType(DataType.Password)]
        [Display(Name = "Confirm Password")]
        [Compare("Password", ErrorMessage = "The Password and Confirmation Password do not match")]
        public string ConfirmPassword { get; set; }
        public bool IsEditMode {  get; set; }


        //TO-DO: Email and Phone Number w/ 2fa
        //
        //[Required(ErrorMessage = "Phone Number is Required")]
        //[StringLength(50)]
        //[DataType(DataType.PhoneNumber)]
        //[Display(Name = "Phone Number")]
        //public string Phone {  get; set; }
        //[Required(ErrorMessage = "Email is Required")]
        //[StringLength(100)]
        //[DataType(DataType.EmailAddress)]
        //[Display(Name = "Email Address")]
        //public string Email { get; set; }

    }
}
