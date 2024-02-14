using Microsoft.EntityFrameworkCore;
using ChiengPlannerVue.Models.Notes;

namespace ChiengPlannerVue.Models
{
    public class ChiengPlannerContext : DbContext
    {
        public ChiengPlannerContext(DbContextOptions<ChiengPlannerContext> options) : base(options) 
        { 
        
        }
        public DbSet<Note> Notes { get; set; }
    }
}
