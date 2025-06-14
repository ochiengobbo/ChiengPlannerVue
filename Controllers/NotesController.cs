﻿using Microsoft.AspNetCore.Mvc;
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
using ChiengPlannerVue.Models.Users;
using Microsoft.AspNetCore.Identity;
using ChiengPlannerVue.Utils;
using Microsoft.AspNetCore.Authorization;

namespace ChiengPlannerVue.Controllers
{
    [Authorize]
    public class NotesController : Controller
    {
        private static string PICTURECONTAINER = "pictures";
        private static string VIDEOCONTAINER = "videos";
        private static string LOCALDIR = "C:\\Users\\Ochie\\source\\img\\";
        private static string AZURECONNECTION = "";
        private ChiengPlannerContext _context;
        private readonly INotesService _notesService;
        private readonly UserManager<User> _userManager;
        private readonly IUserService _userService;
        private readonly IConfiguration _config;

        public NotesController(ChiengPlannerContext context, INotesService notesService, UserManager<User> userManager, IUserService userService, IConfiguration config)
        {
            _context = context;
            _notesService = notesService;
            _userManager = userManager;
            _userService = userService;
            _config = config;
            AZURECONNECTION = config["AzureConnection"];
        }

        [HttpGet]
        public IActionResult Index(int? id)
        {
            var vm = new NotesModel();
            var userId = HttpContext.User.GetIdentifier();
            var notesCount = _notesService.NotesCount(userId);
            if (!id.HasValue && notesCount > 0)
            {
                vm.Notes = _notesService.GetNotesbyUserId(userId).OrderByDescending(x => x.ModifiedDate).ToList();
                var recentNote = vm.Notes.First();
                vm.NotesId = recentNote.NotesId;
                vm.Title = recentNote.Title;
                vm.Body = recentNote.Body;
                vm.PlainText = recentNote.PlainText;
            }
            else if (id.HasValue && notesCount > 0)
            {
                vm.Notes = _notesService.GetNotesbyUserId(userId).OrderByDescending(x => x.ModifiedDate).ToList();
                var note = _notesService.GetNoteById(id.Value);
                vm.NotesId = note.NotesId;
                vm.Title = note.Title;
                vm.Body = note.Body;
                vm.PlainText = note.PlainText;
            }
            else
            {
                return RedirectToAction("EditNote", new { userId = userId });
            }
            CheckForDeletedNoteSessionString();
            vm.UserId = userId;
            return View(vm);
        }

        [HttpGet]
        public IActionResult EditNote(int? id)
        {
            var vm = new NotesModel();
            var userId = HttpContext.User.GetIdentifier();
            vm.Notes = _notesService.GetNotesbyUserId(userId);
            if(id.HasValue && _notesService.NoteExists(id.Value))
            {
                var note = _notesService.GetNoteById(id.Value);
                vm.NotesId = note.NotesId;
                vm.Title = note.Title;
                vm.Body = note.Body;
                vm.PlainText = note.PlainText;
            }
            vm.UserId = userId;
            CheckForDeletedNoteSessionString();
            return View(vm);
        }

        [HttpPost]
        public JsonResult SaveNote(NotesModel vm)
        {
            var errorMsg = "";
            var id = 0;
            if (string.IsNullOrEmpty(vm.Title))
            {
                errorMsg = "<b>Note must have a title!</b>";
                return Json(new { success = false, message = errorMsg }, new System.Text.Json.JsonSerializerOptions());
            }
            if(_notesService.NoteExists(vm.NotesId))
            {
                id = vm.NotesId;
                _notesService.UpdateNote(vm.NotesId, vm.Title, vm.Body, vm.PlainText, DateTime.Now);
            }
            else
            {
                id = _notesService.AddNote(vm.UserId, vm.Title, vm.Body, vm.PlainText);
            }
            return Json(new { success = true, id = id }, new System.Text.Json.JsonSerializerOptions());
        }

        [HttpPost]
        public JsonResult LoadNote(int id)
        {
            var errorMsg = "";
            Note note;
            if (!_notesService.NoteExists(id))
            {
                errorMsg = "<b>Note does not exist!</b>";
                return Json(new { success = false, message = errorMsg }, new System.Text.Json.JsonSerializerOptions());
            }
            else
            {
                note = _notesService.GetNoteById(id);
            }
            return Json(new { success = true, body = note.Body, title = note.Title, id = note.NotesId }, new System.Text.Json.JsonSerializerOptions());
        }

        [HttpPost]
        public JsonResult DeleteNote(int id)
        {
            var errorMsg = "";
            if (!_notesService.NoteExists(id))
            {
                errorMsg = "<b>Note does not exist!</b>";
                return Json(new { success = false, message = errorMsg }, new System.Text.Json.JsonSerializerOptions());
            }
            _notesService.DeleteNote(id);
            HttpContext.Session.SetString("_DeletedNote", "true");

            return Json(new { success = true }, new System.Text.Json.JsonSerializerOptions());
        }

        [HttpPost]
        public JsonResult SaveImage(IFormFile file, int width, int height)
        {
            // store resized image in local directory for now
            // also delete image prior to saving
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot\images", file.FileName);
            System.Drawing.Image img = Image.FromStream(file.OpenReadStream());
            if(width == 0)
                width = 300;
            if(height == 0)
                height = 300;
            System.Drawing.Image resizeImg = ResizeImage(new Bitmap(img), new Size(width, height));
            resizeImg.Save(filePath);
            var url = UploadFileToAzureStorage(file, file.FileName, true);
            // Store to wwwroot folder to have file path to
            System.IO.File.Delete(filePath);
            return Json(new { success = true, url = url }, new System.Text.Json.JsonSerializerOptions());
        }

        [HttpPost]
        public JsonResult SaveVideo(IFormFile file)
        {
            // store resized image in local directory for now
            // also delete image prior to saving
            var url = UploadFileToAzureStorage(file, file.FileName, false, true);
            return Json(new { success = true, url = url }, new System.Text.Json.JsonSerializerOptions());
        }


        // Got this function from https://www.c-sharpcorner.com/UploadFile/ishbandhu2009/resize-an-image-in-C-Sharp/
        private static System.Drawing.Image ResizeImage(System.Drawing.Image imgToResize, Size size)
        {
            // Get the image current width
            int sourceWidth = imgToResize.Width;
            // Get the image current height
            int sourceHeight = imgToResize.Height;
            float nPercent = 0;
            float nPercentW = 0;
            float nPercentH = 0;
            // Calculate width and height with new desired size
            nPercentW = ((float)size.Width / (float)sourceWidth);
            nPercentH = ((float)size.Height / (float)sourceHeight);
            nPercent = Math.Min(nPercentW, nPercentH);
            // New Width and Height
            int destWidth = (int)(sourceWidth * nPercent);
            int destHeight = (int)(sourceHeight * nPercent);
            Bitmap b = new Bitmap(destWidth, destHeight);
            Graphics g = Graphics.FromImage((System.Drawing.Image)b);
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;
            // Draw image with new width and height
            g.DrawImage(imgToResize, 0, 0, destWidth, destHeight);
            g.Dispose();
            return (System.Drawing.Image)b;
        }

        public string UploadFileToAzureStorage(IFormFile file, string filePath, bool isImage = false, bool isVideo = false)
        {
            try
            {
                BlobContainerClient container;
                if (isImage)
                {
                    container = new BlobContainerClient(AZURECONNECTION, PICTURECONTAINER);
                }
                else
                {
                    container = new BlobContainerClient(AZURECONNECTION, VIDEOCONTAINER);
                }

                // create Blob Client for current file
                var blob = container.GetBlobClient(file.FileName);


                // upload File to container, overwriting if file already exists
                if (isVideo)
                    blob.Upload(file.OpenReadStream());
                else
                    blob.Upload(filePath, true);

                // return the uri to blob file
                return blob.Uri.ToString();
            }
            catch (Exception e) { }
            

            return "";
        }

        private void CheckForDeletedNoteSessionString()
        {
            if(!string.IsNullOrEmpty(HttpContext.Session.GetString("_DeletedNote")))
            {
                ViewData["DeletedNote"] = "true";
                HttpContext.Session.SetString("_DeletedNote", "");
            }
        }
    }
}
