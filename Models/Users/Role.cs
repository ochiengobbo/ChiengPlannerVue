using Microsoft.AspNetCore.Identity;

namespace ChiengPlannerVue.Models.Users
{
    public class Role : IdentityRole<int>
    {
        public virtual ICollection<UserRole> UserRoles {  get; set; }
        public virtual ICollection<RoleClaim> RoleClaims {  get; set; }
    }
}
