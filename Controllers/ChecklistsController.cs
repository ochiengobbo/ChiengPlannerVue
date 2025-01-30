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

namespace ChiengPlannerVue.Controllers
{
    public class ChecklistsController : Controller
    {
        private ChiengPlannerContext _context;
        private readonly AzureConnection _connection;
        private readonly IChecklistsService _checklistsService;

        public ChecklistsController(ChiengPlannerContext context, IOptions<AzureConnection> connection, IChecklistsService checklistsService)
        {
            _context = context;
            _connection = connection.Value;
            _checklistsService = checklistsService;
        }

        [HttpGet]
        public IActionResult Index(int? id)
        {
            var vm = _checklistsService.GetChecklists();
            return View(vm);
        }

        [HttpGet]
        public IActionResult AddOrEditChecklist(int? id)
        {
            Checklist vm;
            if (id.HasValue && id != 0)
            {
                vm = new Checklist();
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
                vm = new List<ChiengPlannerVue.Models.Checklists.Task>();
            }
            else
            {
                vm = new List<ChiengPlannerVue.Models.Checklists.Task>();
            }
            return PartialView("_Tasks", vm);
        }

        [HttpGet]
        public IActionResult GetChecklists(bool completed)
        {
            var vm = _checklistsService.GetChecklists().Where(x => x.Completed == completed);
            return View(vm);
        }
    }
}
