using System.ComponentModel.DataAnnotations;
namespace ChiengPlannerVue.Models.Users
{
    public class HomeViewModel : ViewModelBase
    {
        public string AzureConnection {  get; set; }
        public string DBConnection { get; set; }

    }
}
