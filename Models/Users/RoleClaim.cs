using Microsoft.AspNetCore.Identity;

namespace ChiengPlannerVue.Models.Users
{
    public class RoleClaim : IdentityRoleClaim<int>
    {
        public virtual Role Role { get; set; }
    }
}
