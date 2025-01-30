using System.ComponentModel.DataAnnotations;

namespace ChiengPlannerVue.Models.Checklists
{
    public class Task
    {
        public Task()
        {
            this.Name = string.Empty;
            this.CreatedDate = DateTime.Now;
            this.Completed = false;
            this.Checklist = new Checklist();
        }
        [Key]
        public int TaskId { get; set; }
        public int ChecklistId { get; set; }
        public string Name { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public bool Completed { get; set; }
        public Checklist Checklist { get; set; }
    }
}
