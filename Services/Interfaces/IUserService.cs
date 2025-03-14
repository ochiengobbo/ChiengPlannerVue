using ChiengPlannerVue.Models.Users;
using Microsoft.AspNetCore.Identity;

namespace ChiengPlannerVue.Services.Interfaces
{
    public interface IUserService
    {
        bool UserExists(int id);

        bool UserExistsWithUserName(string userName);

        User CreateUser(User user);

        User UpdateUser(User user);

        bool DeleteUser(int id);

        User GetUserByUserName(string userName);

        User GetUserByUserNameAndPassword(string userName, string password, IPasswordHasher<User> passwordHasher);

        User GetUser(int id);

        List<OldPassword> GetOldPasswords(User user);
        void AddToOldPasswords(User user, string pwHash);


    }
}
