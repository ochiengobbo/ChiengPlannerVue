using System.ComponentModel.DataAnnotations;

namespace ChiengPlannerVue.Models.Notes
{
    public class Note
    {
        public Note() {
            this.Title = string.Empty;
            this.Body = string.Empty;
            this.PlainText = string.Empty;
            this.CreatedDate = DateTime.Now;
            this.ModifiedDate = DateTime.Now;
        }
        [Key]
        public int NotesId { get; set; }
        public int? UserId { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public string PlainText { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}
