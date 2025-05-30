using Microsoft.EntityFrameworkCore;
using ChiengPlannerVue.Models.Notes;
using ChiengPlannerVue.Models.Checklists;
using System.Reflection.Metadata;
using ChiengPlannerVue.Utils.Configurations;
using ChiengPlannerVue.Models.Users;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace ChiengPlannerVue.Models
{
    public class ChiengPlannerContext : IdentityDbContext<User, Role, int, UserClaim, UserRole, UserLogin, RoleClaim, UserToken>
    {
        public DbSet<User> ApplicationUsers { get; set; }
        public DbSet<Role> ApplicationRoles { get; set; }
        public DbSet<UserRole> ApplicationUserRoles { get; set; }
        public DbSet<UserLogin> ApplicationUserLogins { get; set; }
        public DbSet<OldPassword> OldPasswords { get; set; }
        public DbSet<Note> Notes { get; set; }
        public DbSet<Checklist> Checklists { get; set; }
        public DbSet<ChiengPlannerVue.Models.Checklists.Task> Tasks { get; set; }
        public ChiengPlannerContext(DbContextOptions<ChiengPlannerContext> options) : base(options)
        {

        }

        #region Required
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new OldPasswordConfiguration());
            modelBuilder.ApplyConfiguration(new RoleConfiguration());
            modelBuilder.ApplyConfiguration(new RoleClaimConfiguration());
            modelBuilder.ApplyConfiguration(new UserClaimConfiguration());
            modelBuilder.ApplyConfiguration(new UserLoginConfiguration());
            modelBuilder.ApplyConfiguration(new UserRoleConfiguration());
            modelBuilder.ApplyConfiguration(new UserTokenConfiguration());

            modelBuilder.ApplyConfiguration(new NotesConfiguration());
            modelBuilder.ApplyConfiguration(new ChecklistConfiguration());
        }
        #endregion
    }
}
