using Microsoft.AspNetCore.Identity;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ChiengPlannerVue.Models.Users
{
    public class UserRole : IdentityUserRole<int>
    {
        [Key]
        public int Id {  get; set; }
        public override int RoleId {  get; set; }
        public override int UserId { get; set; }

        [ForeignKey("UserId")]
        public virtual User User { get; set; }
        [ForeignKey("RoleId")]
        public virtual Role Role { get; set; }
        public DateTime? CreatedDate {  get; set; }
        public DateTime? ModifiedDate { get; set; }

        public string ModifiedBy {  get; set; }

    }
}
