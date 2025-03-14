using Microsoft.AspNetCore.Identity;

namespace ChiengPlannerVue.Models.Users
{
    public class UserLogin : IdentityUserLogin<int>
    {
        public virtual User User { get; set; }
    }
}
