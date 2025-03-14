using Microsoft.EntityFrameworkCore;
using ChiengPlannerVue.Models.Users;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ChiengPlannerVue.Utils.Configurations
{
    public class OldPasswordConfiguration : IEntityTypeConfiguration<OldPassword>
    {
        public void Configure(EntityTypeBuilder<OldPassword> builder)
        {
            builder.ToTable("UserPassword");

            builder.Property(p => p.UserId).HasColumnName("UserId");
        }
    }
}