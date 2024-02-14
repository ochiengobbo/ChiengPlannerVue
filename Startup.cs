using Microsoft.EntityFrameworkCore;
using ChiengPlannerVue.Models;
namespace ChiengPlannerVue
{
    public class Startup
    {
        private readonly IWebHostEnvironment _environment;
        public IConfiguration Configuration { get; }
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void InstantiateSettings(ref Settings settings)
        {

        }
    }
}
