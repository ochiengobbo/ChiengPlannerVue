using ChiengPlannerVue.Models;
using ChiengPlannerVue.Models.Users;
using ChiengPlannerVue.Services.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace ChiengPlannerVue.Services
{
    public class UserService : IUserService
    {
        private ChiengPlannerContext _context;
        private readonly ApplicationContext _userContext;


        public UserService(ChiengPlannerContext context, ApplicationContext userContext)
        {
            _context = context;
            _userContext = userContext;
        }

        public bool UserExists(int id)
        {
            return _userContext.Users.Any(u => u.Id == id);
        }

        public bool UserExistsWithUserName(string userName)
        {
            return _userContext.Users.Any(u => u.UserName == userName);
        }

        public User CreateUser(User user)
        {
            user = _userContext.Users.Add(user).Entity;
            _userContext.SaveChanges();

            return user;
        }

        public User UpdateUser(User user)
        {
            var dbUser = GetUser(user.Id);

            dbUser.FirstName = user.FirstName;
            dbUser.LastName = user.LastName;
            dbUser.Email = user.Email;
            dbUser.PhoneNumber = user.PhoneNumber;
            dbUser.ModifiedBy = user.ModifiedBy;

            _userContext.SaveChanges();
            return dbUser;
        }

        public bool DeleteUser(int id)
        {
            var user = _userContext.Users.First(i => i.Id == id);
            _userContext.Users.Remove(user);
            _userContext.SaveChanges();
            return true;
        }

        public User GetUserByUserName(string userName)
        {
            var user = _userContext.Users.Where(u => u.UserName == userName)
                        .Include(u => u.UserRoles).ThenInclude(ur => ur.Role)
                        .First();
            return user;
        }

        public User GetUserByUserNameAndPassword(string userName, string password, IPasswordHasher<User> passwordHasher)
        {
            throw new NotImplementedException();
        }

        public User GetUser(int id)
        {
            return _userContext.Users.Where(u => u.Id == id)
                .Include(u => u.UserRoles).ThenInclude(ur => ur.Role)
                .Include(u => u.UserRoles)
                .First();
        }

        public List<OldPassword> GetOldPasswords(User user)
        {
            return _userContext.OldPasswords.Where(u => u.UserId == user.Id).ToList();
        }

        public void AddToOldPasswords(User user, string pwHash)
        {
            var pwRecord = new OldPassword
            {
                HashPassword = pwHash,
                UserId = user.Id,
                CreatedDate = DateTime.Now
            };
            _userContext.OldPasswords.Add(pwRecord);
            _userContext.SaveChanges();
        }
    }
}
