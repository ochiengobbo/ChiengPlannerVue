using ChiengPlannerVue.Models;
using ChiengPlannerVue.Models.Users;

namespace ChiengPlannerVue.Utils
{
    public class ApplicationDataInitializer
    {
        private readonly ApplicationContext _context;
        public ApplicationDataInitializer(ApplicationContext context)
        {
            _context = context;
        }

        public void Initialize()
        {
            _context.Database.EnsureCreated();

            CreateDefaultUsers();
        }

        private void CreateDefaultRoles()
        {
            if (!context.Roles.Any())
            {
                _ = new List<Role>();
                foreach (RoleType role in Enum.GetValues(typeof(RoleType)))
                {
                    _context.Roles.Add(new Role() { Name = role.GetDescription() });

                    _context.SaveChanges();
                }
            }
        }

        public void CreateDefaultUsers()
        {
            if (!_context.Users.Any())
            {
                CreateDefaultRoles();
                var _Role -_context.Roles.Where("it.Name = @@", RoleType.__.GetDescription()).FirstOrDefault();

                var roles = new List<UserRole>();
                foreach (var role in _context.Roles)
                {
                    roles.Add(new UserRole() { Role = role });
                }

                User adminUser = new User()
                {
                    UserName = "ochiengobbo",
                    Email = "obboochieng@gmail.com",
                    UserRoles = new List<UserRole>()
                    {
                        new UserRole() { Role = _Role}
                    }

                };

                _context.Users.Add(adminUser);
                _context.SaveChanges();
            }
        }
            
    }
}
