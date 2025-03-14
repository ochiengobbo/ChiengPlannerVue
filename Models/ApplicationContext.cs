using ChiengPlannerVue.Models.Users;
using ChiengPlannerVue.Utils.Configurations;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ChiengPlannerVue.Models
{
    public class ApplicationContext : IdentityDbContext<User, Role, int, UserClaim, UserRole, UserLogin, RoleClaim, UserToken>
    {
        public DbSet<User> ApplicationUsers {  get; set; }
        public DbSet<Role> ApplicationRoles {  get; set; }
        public DbSet<UserRole> ApplicationUserRoles {  get; set; }
        public DbSet<UserLogin> ApplicationUserLogins {  get; set; }
        public DbSet<OldPassword> OldPasswords {  get; set; }
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ApplyConfiguration(new UserConfiguration());
        }
    }
}
