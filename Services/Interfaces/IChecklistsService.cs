using ChiengPlannerVue.Models.Checklists;

namespace ChiengPlannerVue.Services.Interfaces
{
    public interface IChecklistsService
    {
        List<Checklist> GetChecklists();
        Checklist GetChecklistById(int id);
        int ChecklistsCount();
        bool ChecklistExists(int id);
        int AddChecklist(int? userId, string name);
        void UpdateChecklist(int checklistId, string name, DateTime modifiedDate);
        void DeleteChecklist(int checklistId);
        int AddTask(int? userId, int checklistId, string name);
        void UpdateTask(int taskId, int checklistId, string name, DateTime modifiedDate);
        void DeleteTask(int taskId);
    }
}
