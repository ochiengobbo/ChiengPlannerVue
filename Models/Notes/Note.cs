﻿using ChiengPlannerVue.Models.Users;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ChiengPlannerVue.Models.Notes
{
    public class Note
    {
        public Note() {
            this.Title = string.Empty;
            this.Body = string.Empty;
            this.PlainText = string.Empty;
            this.CreatedDate = DateTime.Now;
            this.Guid = string.Empty;
        }
        [Key]
        public int NotesId { get; set; }
        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual User User { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public string PlainText { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string Guid { get; set; }
    }
}
