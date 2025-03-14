using Microsoft.EntityFrameworkCore;
using ChiengPlannerVue.Models.Users;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ChiengPlannerVue.Utils.Configurations
{
    public class RoleConfiguration : IEntityTypeConfiguration<Role>
    {
        public void Configure(EntityTypeBuilder<Role> builder)
        {
            builder.ToTable("Role")
                .HasKey(e => e.Id);

            builder.Property(p => p.Id).HasColumnName("RoleId")
                .ValueGeneratedOnAdd().IsRequired();

            builder.HasMany(e => e.UserRoles)
                .WithOne(e => e.Role)
                .HasForeignKey(ur => ur.RoleId)
                .IsRequired();

            builder.HasMany(e => e.UserRoles)
                .WithOne(e => e.Role)
                .HasForeignKey(ur => ur.RoleId)
                .IsRequired();
        }
    }
}