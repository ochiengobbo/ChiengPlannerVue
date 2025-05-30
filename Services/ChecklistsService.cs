using ChiengPlannerVue.Models;
using ChiengPlannerVue.Models.Checklists;
using ChiengPlannerVue.Models.Notes;
using ChiengPlannerVue.Services.Interfaces;
using Microsoft.VisualBasic;
using System;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

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
            var checklists = _context.Checklists.Include(x => x.Tasks);
            return checklists.ToList();
        }

        public List<Checklist> GetChecklistsByUserId(int userId)
        {
            var checklists = _context.Checklists.Where(x => x.UserId == userId).Include(x => x.Tasks);
            return checklists.ToList();
        }

        public Checklist GetChecklistById(int id)
        {
            return _context.Checklists.Where(x => x.ChecklistId == id).Include(x => x.Tasks).First();
        }

        public Checklist GetChecklistByGuid(string guid)
        {
            return _context.Checklists.Where(x => string.Equals(x.Guid, guid)).Include(x => x.Tasks).First();
        }

        public int ChecklistsCount()
        {
            return _context.Checklists.Count();
        }

        public bool ChecklistExists(int id)
        {
            return _context.Checklists.Where(x => x.ChecklistId == id).Any();
        }

        public int AddChecklist(int userId, string name, DateTime? dueDate = null)
        {
            var checklist = new Checklist();
            // Keep UserId null until Users and Authentication process is complete.
            checklist.UserId = userId;
            checklist.Name = name;
            checklist.Guid = Guid.NewGuid().ToString();
            // Due Date for Tasks to be implemented later
            checklist.DueDate = dueDate;
            _context.Checklists.Add(checklist);
            _context.SaveChanges();
            return GetChecklistByGuid(checklist.Guid).ChecklistId;
        }

        public void UpdateChecklist(int checklistId, string name, DateTime modifiedDate, DateTime? dueDate = null)
        {
            var checklist = GetChecklistById(checklistId);
            checklist.Name = name;
            checklist.ModifiedDate = modifiedDate;
            // Due Date for Tasks to be implemented later
            checklist.DueDate = dueDate;
            _context.SaveChanges();
        }

        public void DeleteChecklist(int checklistId)
        {
            var checklist = GetChecklistById(checklistId);
            _context.Checklists.Remove(checklist);
            _context.SaveChanges();
        }

        public List<ChiengPlannerVue.Models.Checklists.Task> GetTasks()
        {
            return _context.Tasks.Include(x => x.Checklist).ToList();
        }

        public List<ChiengPlannerVue.Models.Checklists.Task> GetTasksByChecklistId(int checklistId)
        {
            return _context.Tasks.Include(x => x.Checklist).Where(x => x.ChecklistId == checklistId).ToList();
        }

        public ChiengPlannerVue.Models.Checklists.Task GetTaskById(int id)
        {
            return _context.Tasks.Include(x => x.Checklist).Include(x => x.Checklist.Tasks).Where(x => x.TaskId == id).First();
        }

        public ChiengPlannerVue.Models.Checklists.Task GetTaskByGuid(string guid)
        {
            return _context.Tasks.Include(x => x.Checklist).Where(x => string.Equals(x.Guid, guid)).First();
        }

        public int TaskCount()
        {
            return _context.Checklists.Count();
        }

        public bool TaskExists(int id)
        {
            return _context.Tasks.Where(x => x.TaskId == id).Any();
        }

        public int AddTask(int checklistId, string name, DateTime? dueDate = null)
        {
            var task = new ChiengPlannerVue.Models.Checklists.Task();
            // Keep UserId null until Users and Authentication process is complete.
            var checklist = GetChecklistById(checklistId);
            task.ChecklistId = checklistId;
            task.Name = name;
            // Due Date for Tasks to be implemented later
            task.DueDate = dueDate;
            task.Guid = Guid.NewGuid().ToString();
            checklist.Tasks.Add(task);
            _context.SaveChanges();
            return GetTaskByGuid(task.Guid).TaskId;
        }

        public void UpdateTask(int taskId, string name, DateTime modifiedDate, DateTime? dueDate = null)
        {
            var task = GetTaskById(taskId);
            task.Name = name;
            task.ModifiedDate = modifiedDate;
            // Due Date for Tasks to be implemented later
            task.DueDate = dueDate;
            _context.SaveChanges();
        }

        public bool MarkTask(int taskId, bool check, DateTime modifiedDate)
        {
            var task = GetTaskById(taskId);
            var prevStatus = task.Completed;
            task.Completed = check;
            task.ModifiedDate = modifiedDate;
            _context.SaveChanges();
            var tasks = task.Checklist.Tasks.Where(x => x.TaskId != taskId).ToList();
            if (tasks.Count() == 0 && check)
            {
                return true;
            }
            else if (tasks.Count() > 0)
            {
                var completedChecklist = check && !tasks.Any(x => x.Completed == false);
                task.Checklist.Completed = completedChecklist;
                _context.SaveChanges();
                return completedChecklist;
            }
            else
            {
                return false;
            }
        }

        public void DeleteTask(int taskId)
        {
            var task = GetTaskById(taskId);
            _context.Tasks.Remove(task);
            _context.SaveChanges();
        }
    }
}
