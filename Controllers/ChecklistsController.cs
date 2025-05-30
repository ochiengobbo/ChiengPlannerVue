using Microsoft.AspNetCore.Mvc;
using ChiengPlannerVue.Models.Notes;
using System.Web;
using System.IO;
using System.Text;
using Azure.Storage.Blobs;
using System.Drawing.Drawing2D;
using System.Drawing;
using System.Drawing.Imaging;
using Microsoft.Extensions.Options;
using ChiengPlannerVue.Models;
using System;
using Microsoft.AspNetCore.Http;
using ChiengPlannerVue.Services.Interfaces;
using ChiengPlannerVue.Models.Checklists;
using ChiengPlannerVue.Services;
using System.Threading.Tasks;
using ChiengPlannerVue.Utils;
using Microsoft.AspNetCore.Authorization;

namespace ChiengPlannerVue.Controllers
{
    [Authorize]
    public class ChecklistsController : Controller
    {
        private ChiengPlannerContext _context;
        private readonly AzureConnection _connection;
        private readonly IChecklistsService _checklistsService;
        private static int PAGE_LIMIT = 3;

        public ChecklistsController(ChiengPlannerContext context, IOptions<AzureConnection> connection, IChecklistsService checklistsService)
        {
            _context = context;
            _connection = connection.Value;
            _checklistsService = checklistsService;
        }

        [HttpGet]
        public IActionResult Index(int? id)
        {
            var vm = new ChecklistViewModel();
            var userId = HttpContext.User.GetIdentifier();
            vm.Checklists = _checklistsService.GetChecklistsByUserId(userId).Where(x => !x.Completed).OrderByDescending(x => x.ModifiedDate).ToList();
            vm.PageLimit = PAGE_LIMIT;
            vm.Active = true;
            return View(vm);
        }

        [HttpGet]
        public IActionResult AddOrEditChecklist(int? id)
        {
            Checklist vm;
            if (id.HasValue && id != 0)
            {
                vm = _checklistsService.GetChecklistById(id.Value);
            }
            else
            {
                vm = new Checklist();
            }
            return PartialView("_AddOrEditChecklist", vm);
        }

        [HttpGet]
        public IActionResult Tasks(int? id)
        {
            List<ChiengPlannerVue.Models.Checklists.Task> vm;
            if (id.HasValue && id != 0)
            {
                vm = _checklistsService.GetTasksByChecklistId(id.Value);
            }
            else
            {
                vm = new List<ChiengPlannerVue.Models.Checklists.Task>();
            }
            return PartialView("_Tasks", vm);
        }

        [HttpGet]
        public IActionResult DisplayChecklists(bool completed = false, int offset = 0)
        {
            var vm = new ChecklistViewModel(); 
            var userId = HttpContext.User.GetIdentifier();
            vm.Checklists = _checklistsService.GetChecklistsByUserId(userId).Where(x => x.Completed == completed).OrderByDescending(x => x.ModifiedDate).ToList();
            vm.PageLimit = PAGE_LIMIT + offset;
            if (offset != 0 && vm.Checklists.Count() > PAGE_LIMIT)
            {
                vm.Checklists = vm.Checklists.GetRange(offset, (vm.Checklists.Count() - offset));
            }
            vm.Active = !completed;
            return PartialView("_DisplayChecklist", vm);
        }

        [HttpPost]
        public IActionResult SaveChecklist(int id, string name)
        {
            try
            {
                if (_checklistsService.ChecklistExists(id))
                {
                    _checklistsService.UpdateChecklist(id, name, DateTime.Now);
                }
                else
                {
                    var userId = HttpContext.User.GetIdentifier();
                    id = _checklistsService.AddChecklist(userId, name);
                }

            }
            catch (Exception ex) { }
            return Json(new { success = true, id = id }, new System.Text.Json.JsonSerializerOptions());

        }

        [HttpPost]
        public IActionResult SaveTask(int id, int checklistId, string name)
        {
            try
            {
                if (_checklistsService.TaskExists(id))
                {
                    _checklistsService.UpdateTask(id, name, DateTime.Now);
                }
                else
                {
                    id = _checklistsService.AddTask(checklistId, name);
                }

            }
            catch (Exception ex) { }
            return Json(new { success = true, taskId = id }, new System.Text.Json.JsonSerializerOptions());

        }

        [HttpPost]
        public IActionResult DeleteTask(int taskId)
        {
            try
            {
                var errorMsg = "";
                if (!_checklistsService.TaskExists(taskId))
                {
                    errorMsg = "<b><small>Task does not exist!</small></b>";
                    return Json(new { success = false, message = errorMsg }, new System.Text.Json.JsonSerializerOptions());
                }
                _checklistsService.DeleteTask(taskId);
                HttpContext.Session.SetString("_DeletedTask", "true");

                return Json(new { success = true }, new System.Text.Json.JsonSerializerOptions());

            }
            catch (Exception ex) { }
            return Json(new { success = true, taskId = taskId }, new System.Text.Json.JsonSerializerOptions());

        }

        [HttpPost]
        public IActionResult DeleteChecklist(int checklistId)
        {
            try
            {
                var errorMsg = "";
                if (!_checklistsService.ChecklistExists(checklistId))
                {
                    errorMsg = "<b><small>Checklist does not exist!</small></b>";
                    return Json(new { success = false, message = errorMsg }, new System.Text.Json.JsonSerializerOptions());
                }
                _checklistsService.DeleteChecklist(checklistId);
                HttpContext.Session.SetString("_DeletedChecklist", "true");
                return Json(new { success = true, message = "<b><small>Your Checklist has been deleted!</small></b>" }, new System.Text.Json.JsonSerializerOptions());
            }
            catch (Exception ex) { }
            return Json(new { success = true, checklistId = checklistId }, new System.Text.Json.JsonSerializerOptions());

        }

        [HttpPost]
        public IActionResult MarkTask(int id, bool check)
        {
            try
            {
                var errorMsg = "";
                var completed = false;
                if (_checklistsService.TaskExists(id))
                {
                   completed =  _checklistsService.MarkTask(id, check, DateTime.Now);
                }
                else
                {
                    errorMsg = "<b><small>Task does not exist!</small></b>";
                    return Json(new { success = false, message = errorMsg }, new System.Text.Json.JsonSerializerOptions());
                }
                return Json(new { success = true, completed = completed }, new System.Text.Json.JsonSerializerOptions());

            }
            catch (Exception ex) { }
            return Json(new { success = true, taskId = id }, new System.Text.Json.JsonSerializerOptions());

        }

        [HttpGet]
        public IActionResult CompletedChecklist(int id)
        {
            try
            {
                var errorMsg = "";
                var completed = false;
                if (_checklistsService.ChecklistExists(id))
                {
                    completed = _checklistsService.GetChecklistById(id).Completed;
                }
                else
                {
                    errorMsg = "<b><small>Checklist does not exist!</small></b>";
                    return Json(new { success = false, message = errorMsg }, new System.Text.Json.JsonSerializerOptions());
                }
                return Json(new { success = true, completed = completed }, new System.Text.Json.JsonSerializerOptions());

            }
            catch (Exception ex) { }
            return Json(new { success = true, id = id }, new System.Text.Json.JsonSerializerOptions());

        }
    }
}
