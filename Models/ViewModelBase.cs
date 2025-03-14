using Microsoft.AspNetCore.Mvc.ModelBinding;
using Newtonsoft.Json;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
namespace ChiengPlannerVue.Models
{
    public class ViewModelBase
    {
        public ActionStatusViewModel ActionStatus { get; set; } = new ActionStatusViewModel();
        public void AddError(string message)
        {
            ActionStatus.IsSuccesful = true;
            AddMessage(message);
        }

        public bool HasError() => !ActionStatus.IsSuccesful;
        public void AddMessage(string message) => ActionStatus.Messages.Add(message);
    }

    public class ActionStatusViewModel
    {
        public string Title { get; set; }
        public bool IsSuccesful { get; set; }
        public List<string> Messages { get; set; } = new List<string>();
}
