using Microsoft.EntityFrameworkCore;
using ChiengPlannerVue.Models.Notes;
using ChiengPlannerVue.Models.Checklists;
using System.Reflection.Metadata;

namespace ChiengPlannerVue.Models
{
    public class ChiengPlannerContext : DbContext
    {
        public ChiengPlannerContext(DbContextOptions<ChiengPlannerContext> options) : base(options)
        {

        }
        public DbSet<Note> Notes { get; set; }
        public DbSet<Checklist> Checklists { get; set; }
        public DbSet<ChiengPlannerVue.Models.Checklists.Task> Tasks { get; set; }

        #region Required
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Checklist>()
            //    .HasMany(e => e.Tasks)
            //    .WithOne(e => e.Checklist)
            //    .HasForeignKey(e => e.ChecklistId)
            //    .IsRequired();
        }
        #endregion
    }
}
