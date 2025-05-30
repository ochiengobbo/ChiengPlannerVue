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


        public UserService(ChiengPlannerContext context)
        {
            _context = context;
        }

        public bool UserExists(int id)
        {
            return _context.Users.Any(u => u.Id == id);
        }

        public bool UserExistsWithUserName(string userName)
        {
            return _context.Users.Any(u => u.UserName == userName);
        }

        public User CreateUser(User user)
        {
            user = _context.Users.Add(user).Entity;
            _context.SaveChanges();

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

            _context.SaveChanges();
            return dbUser;
        }

        public bool DeleteUser(int id)
        {
            var user = _context.Users.First(i => i.Id == id);
            _context.Users.Remove(user);
            _context.SaveChanges();
            return true;
        }

        public User GetUserByUserName(string userName)
        {
            var user = _context.Users.Where(u => u.UserName == userName)
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
            return _context.Users.Where(u => u.Id == id)
                .Include(u => u.UserRoles).ThenInclude(ur => ur.Role)
                .Include(u => u.UserRoles)
                .First();
        }

        public List<OldPassword> GetOldPasswords(User user)
        {
            return _context.OldPasswords.Where(u => u.UserId == user.Id).ToList();
        }

        public void AddToOldPasswords(User user, string pwHash)
        {
            var pwRecord = new OldPassword
            {
                HashPassword = pwHash,
                UserId = user.Id,
                CreatedDate = DateTime.Now
            };
            _context.OldPasswords.Add(pwRecord);
            _context.SaveChanges();
        }
    }
}
