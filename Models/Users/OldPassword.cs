using System.ComponentModel.DataAnnotations;

namespace ChiengPlannerVue.Models.Users
{
    public class OldPassword
    {
        public OldPassword()
        {
            CreatedDate = DateTime.Now;
        }

        [Key]
        public int OldPasswordId {  get; set; }

        public string HashPassword { get; set; }
        public DateTime CreatedDate {  get; set; }

        public int UserId { get; set; }
        public virtual User User { get; set; }
    }
}
