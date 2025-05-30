using Microsoft.EntityFrameworkCore;
using ChiengPlannerVue.Models.Notes;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ChiengPlannerVue.Models.Users;

namespace ChiengPlannerVue.Utils.Configurations
{
    public class NotesConfiguration : IEntityTypeConfiguration<Note>
    {
        public void Configure(EntityTypeBuilder<Note> builder)
        {
            builder.HasOne(e => e.User)
                .WithMany(e => e.Notes)
                .HasForeignKey(n => n.UserId);
        }
    }
}