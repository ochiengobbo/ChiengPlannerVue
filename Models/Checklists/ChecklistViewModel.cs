namespace ChiengPlannerVue.Models.Checklists
{
    public class ChecklistViewModel
    {
        public List<Checklist> Checklists { get; set; }
        public int PageLimit { get; set; }
        public bool Active { get; set; }
    }
}
