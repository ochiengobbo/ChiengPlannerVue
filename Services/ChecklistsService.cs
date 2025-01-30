using ChiengPlannerVue.Models;
using ChiengPlannerVue.Models.Checklists;
using ChiengPlannerVue.Models.Notes;
using ChiengPlannerVue.Services.Interfaces;

namespace ChiengPlannerVue.Services
{
    public class ChecklistsService : IChecklistsService
    {
        private ChiengPlannerContext _context;

        public ChecklistsService(ChiengPlannerContext context)
        {
            _context = context;
        }

        public List<Checklist> GetChecklists()
        {
            return _context.Checklists.ToList();
        }

        public Checklist GetChecklistById(int id)
        {
            return _context.Checklists.Where(x => x.ChecklistId == id).First();
        }

        public int ChecklistsCount()
        {
            return _context.Checklists.Count();
        }

        public bool ChecklistExists(int id)
        {
            return _context.Checklists.Where(x => x.ChecklistId == id).Any();
        }

        public int AddChecklist(int? userId, string name)
        {
            return 0;
        }

        public void UpdateChecklist(int checklistId, string name, DateTime modifiedDate)
        {
        }

        public void DeleteChecklist(int checklistId)
        {
        }

        public int AddTask(int? userId, int checklistId, string name)
        {
            return 0;
        }

        public void UpdateTask(int taskId, int checklistId, string name, DateTime modifiedDate)
        {
        }

        public void DeleteTask(int taskId)
        {
        }
    }
}
