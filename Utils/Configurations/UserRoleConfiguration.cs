using Microsoft.EntityFrameworkCore;
using ChiengPlannerVue.Models.Users;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ChiengPlannerVue.Utils.Configurations
{
    public class UserRoleConfiguration : IEntityTypeConfiguration<UserRole>
    {
        public void Configure(EntityTypeBuilder<UserRole> builder)
        {
            builder.ToTable("UserRole");
            builder.HasKey(a => a.Id);
            builder.Property(p => p.RoleId).HasColumnName("RoleId");
            builder.Property(p => p.UserId).HasColumnName("UserId");
        }
    }
}