using Microsoft.EntityFrameworkCore;
using ChiengPlannerVue.Models.Checklists;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ChiengPlannerVue.Utils.Configurations
{
    public class ChecklistConfiguration : IEntityTypeConfiguration<Checklist>
    {
        public void Configure(EntityTypeBuilder<Checklist> builder)
        {
            builder.HasMany(e => e.Tasks)
                .WithOne(e => e.Checklist)
                .HasForeignKey(t => t.ChecklistId)
                .IsRequired();

            builder.HasOne(e => e.User)
                .WithMany(e => e.Checklists)
                .HasForeignKey(c => c.UserId);
        }
    }
}