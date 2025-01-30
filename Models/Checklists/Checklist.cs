using System.ComponentModel.DataAnnotations;

namespace ChiengPlannerVue.Models.Checklists
{
    public class Checklist
    {
        public Checklist()
        {
            this.Name = string.Empty;
            this.CreatedDate = DateTime.Now;
            this.Completed = false;
        }
        [Key]
        public int ChecklistId { get; set; }
        public int? UserId { get; set; }
        public string Name { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public bool Completed { get; set; }
        // public List<Task> Tasks { get; set; }
    }
}
