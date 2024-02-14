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

namespace ChiengPlannerVue.Controllers
{
    public class NotesController : Controller
    {
        private static string PICTURECONTAINER = "pictures";
        private static string VIDEOCONTAINER = "videos";
        private static string LOCALDIR = "C:\\Users\\Ochie\\source\\img\\";
        private ChiengPlannerContext _context;
        private readonly AzureConnection _connection;

        public NotesController(ChiengPlannerContext context, IOptions<AzureConnection> connection)
        {
            _context = context;
            _connection = connection.Value;
        }

        public IActionResult Index()
        {
            var vm = new NotesModel();
            return View(vm);
        }

        [HttpPost]
        public JsonResult SaveNote(NotesModel vm)
        {
            var note = new Note();
            var errorMsg = "";

            if (string.IsNullOrEmpty(vm.Title))
            {
                errorMsg = "<b>Note must have a title!</b>";
                return Json(new { success = false, message = errorMsg }, new System.Text.Json.JsonSerializerOptions());
            }

            note.Title = vm.Title;
            note.Body = vm.Body;
            // Keep UserId null until Users and Authentication process is complete.
            note.UserId = null;
            note.PlainText = vm.PlainText;
            _context.Notes.Add(note);
            _context.SaveChanges();
            return Json(new { success = true }, new System.Text.Json.JsonSerializerOptions());
        }

        [HttpPost]
        public JsonResult SaveImage(IFormFile file, int width, int height)
        {
            // store resized image in local directory for now
            // also delete image prior to saving
            var filePath = LOCALDIR + file.FileName;
            System.IO.File.Delete(filePath);
            System.Drawing.Image img = Image.FromStream(file.OpenReadStream());
            if(width == 0)
                width = 300;
            if(height == 0)
                height = 300;
            System.Drawing.Image resizeImg = ResizeImage(new Bitmap(img), new Size(width, height));
            resizeImg.Save(filePath);
            var url = UploadFileToAzureStorage(file.FileName, filePath, true);
            return Json(new { success = true, url = url }, new System.Text.Json.JsonSerializerOptions());
        }

        [HttpPost]
        public JsonResult SaveVideo(IFormFile file)
        {
            // store resized image in local directory for now
            // also delete image prior to saving
            var filePath = LOCALDIR + file.FileName;
            System.IO.File.Delete(filePath);
            using (var videoStream = System.IO.File.Create(filePath))
            {
                var oldVideoStream = file.OpenReadStream();
                oldVideoStream.Seek(0, SeekOrigin.Begin);
                oldVideoStream.CopyTo(videoStream);
            }
            var url = UploadFileToAzureStorage(file.FileName, filePath, false, true);
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

        public string UploadFileToAzureStorage(string fileName, string filePath, bool isImage = false, bool isVideo = false)
        {
            try
            {
                BlobContainerClient container;
                if (isImage)
                {
                    container = new BlobContainerClient(_connection.AzureStorageConnection, PICTURECONTAINER);
                }
                else
                {
                    container = new BlobContainerClient(_connection.AzureStorageConnection, VIDEOCONTAINER);
                }

                // create Blob Client for current file
                var blob = container.GetBlobClient(fileName);

                // upload File to container, overwriting if file already exists
                blob.Upload(filePath, true);

                // return the uri to blob file
                return blob.Uri.ToString();
            }
            catch (Exception e) { }
            

            return "";
        }
    }
}
