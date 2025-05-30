using ChiengPlannerVue.Models.Checklists;
using Microsoft.EntityFrameworkCore;

namespace ChiengPlannerVue.Services.Interfaces
{
    public interface IChecklistsService
    {
        List<Checklist> GetChecklists();
        List<Checklist> GetChecklistsByUserId(int userId);
        Checklist GetChecklistById(int id);
        Checklist GetChecklistByGuid(string guid);
        int ChecklistsCount();
        bool ChecklistExists(int id);
        int AddChecklist(int userId, string name, DateTime? dueDate = null);
        void UpdateChecklist(int checklistId, string name, DateTime modifiedDate, DateTime? dueDate = null);
        void DeleteChecklist(int checklistId);
        List<ChiengPlannerVue.Models.Checklists.Task> GetTasks();
        List<ChiengPlannerVue.Models.Checklists.Task> GetTasksByChecklistId(int checklistId);
        ChiengPlannerVue.Models.Checklists.Task GetTaskById(int id);
        ChiengPlannerVue.Models.Checklists.Task GetTaskByGuid(string guid);
        int TaskCount();
        bool TaskExists(int id);
        int AddTask(int checklistId, string name, DateTime? dueDate = null);
        void UpdateTask(int taskId, string name, DateTime modifiedDate, DateTime? dueDate = null);
        bool MarkTask(int taskId, bool check, DateTime modifiedDate);
        void DeleteTask(int taskId);
    }
}
