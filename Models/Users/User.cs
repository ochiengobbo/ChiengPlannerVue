using Microsoft.AspNetCore.Identity;
using System.ComponentModel;

namespace ChiengPlannerVue.Models.Users
{
    public class User : IdentityUser<int>
    {
        public string FirstName {  get; set; }
        public string LastName { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate {  get; set; }
        public override string PasswordHash { get => base.PasswordHash; set => base.PasswordHash = value; }
        public bool IsActive {  get; set; }
        public virtual ICollection<UserLogin> Logins { get; set; }
        public virtual ICollection<UserRole> UserRoles { get; set; }
        public virtual ICollection<OldPassword> OldPasswords {  get; set; }
        public virtual ICollection<UserClaim> UserClaims {  get; set; }
        public virtual ICollection<UserToken> Tokens {  get; set; }

        public string ModifiedBy { get; set; }
        public string FullName { get { return $"{FirstName} {LastName}"; } }

        public List<string> GetRoles()
        {
            if (UserRoles != null && UserRoles.Any())
            {
                return UserRoles.Select(ur => ur.Role.Name).ToList();
            }
            return new List<string>();
        }
    }

    public class UserClaim : IdentityUserClaim<int>
    {
        public virtual User User { get; set; }
    }

    public class UserToken : IdentityUserToken<int>
    {
        public virtual User User { get; set; }
    }

    public enum RoleType
    {
        [Description("Administrator")] Admin,
        [Description("Basic User")] User
    }
}
