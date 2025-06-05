using System.ComponentModel.DataAnnotations;

namespace ChiengPlannerVue.Models.Users
{
    public class SignInViewModel : ViewModelBase
    {
        [Required]
        [Display(Name = "Username")]
        public string UserName { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
