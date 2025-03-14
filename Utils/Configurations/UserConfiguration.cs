using Microsoft.EntityFrameworkCore;
using ChiengPlannerVue.Models.Users;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ChiengPlannerVue.Utils.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("User")
                .HasKey(e => e.Id);

            builder.Property(p => p.Id).HasColumnName("UserId")
                .ValueGeneratedOnAdd().IsRequired();

            builder.HasMany(e => e.UserClaims)
                .WithOne(e => e.User)
                .HasForeignKey(uc => uc.UserId)
                .IsRequired();

            builder.HasMany(e => e.Logins)
                .WithOne(e => e.User)
                .HasForeignKey(ul => ul.UserId)
                .IsRequired();

            builder.HasMany(e => e.Tokens)
                .WithOne(e => e.User)
                .HasForeignKey(ut => ut.UserId)
                .IsRequired();

            builder.HasMany(e => e.UserRoles)
                .WithOne(e => e.User)
                .HasForeignKey(ur => ur.UserId)
                .IsRequired();
        }
    }
}