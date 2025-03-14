using Microsoft.EntityFrameworkCore;
using ChiengPlannerVue.Models.Users;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ChiengPlannerVue.Utils.Configurations
{
    public class UserLoginConfiguration : IEntityTypeConfiguration<UserLogin>
    {
        public void Configure(EntityTypeBuilder<UserLogin> builder)
        {
            builder.ToTable("UserLogin");

            builder.Property(p => p.UserId).HasColumnName("UserId");
        }
    }
}