using ChiengPlannerVue.Models.Users;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ChiengPlannerVue.Models.Checklists
{
    public class Checklist
    {
        public Checklist()
        {
            this.Name = string.Empty;
            this.CreatedDate = DateTime.Now;
            this.ModifiedDate = DateTime.Now;
            this.Completed = false;
            this.Guid = string.Empty;
        }
        [Key]
        public int ChecklistId { get; set; }
        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual User User { get; set; }
        public string Name { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public DateTime? DueDate { get; set; }
        public bool Completed { get; set; }
        public string Guid { get; set; }
        public List<Task> Tasks { get; set; }
    }
}
