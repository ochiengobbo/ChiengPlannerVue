namespace ChiengPlannerVue.Models.Notes
{
    public class NotesModel
    {
        public int NotesId { get; set; }
        public int? UserId { get; set; }
        public string? Title { get; set; }
        public string? Body { get; set; }
        public string? PlainText { get; set; }
    }
}
