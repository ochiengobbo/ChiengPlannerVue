using System.Collections.Generic;

namespace ChiengPlannerVue.Utils
{
    public static class Constants
    {
        public const string ApplicationCookie = "Application.Cookie";
        public const string ClaimTypeFirstName = "FirstName";
        public const string UserID = "UserID";
        public const string ClaimTypeUsername = "username";
        public const string ClaimTypeIdentifier = "Identifier";
        public const string ClaimTypeIsActive = "IsActive";
        public const string ClaimTypeRole = "UserRole";
        public const string ClaimTypeLastName = "LastName";
        public const string ApplicationNameKey = "ApplicationName";
        public const string ApplicationBaseURLKey = "ApplicationBaseURL";
        public const string AdminOnlyPolicy = "AdminOnlyPolicy";
        public const string AdminAndManagerPolicy = "AdminAndManagerPolicy";
        public const string HideSideNavKey = "HideSideNavKey";
        public const string MainLayout = "~/Views/Shared/_Layout.cshtml";
        public const string CLGLayout = "~/Views/Shared/_CLGLayout.cshtml";
        public const string CLGLayoutEdit = "~/Views/Shared/_CLGEditLayout.cshtml";
        public const string InfoLayout = "~/Views/Shared/_InfoLayout.cshtml";

        //Sessions
        public const string FiscalYear = "FiscalYear";

        public const string ServerSideSuccessTitle = "Success";
        public const string ServerSideErrorTitle = "Server Side Error";
        public const string GenericServerSideUpdateMessage = "Unable to save the changes. Please try again.";
        public const string GenericServerSidValidationMessage = "This is not a valid request. Please provide all required data and try again.";
        public const string GenericServerSideMessage = "You are trying to fetch or update a record that does not contain valid entries";
        public const string GenericServerSideSuccessMessage = "Changes are saved successfully.";

        // Side Navigation Constants 
        public const string UserHome = "See All Users";
        public const string AddUser = "Add New User";
        public const string UpdateUser = "User Details";

        public const string ReportHome = "See All Reports";
        public const string AddReport = "Add New Report";
        public const string UpdateReport = "Report Details";

        public const string CLGHome = "Back to Main Menu";
        public const string AddCLG = "Add New CLG";

    }

    public static class MenuItem
    {
        public static string Home = "Home";
        public static string User = "User";
        public static string Report = "Report";
        public static string CLG = "CLGs";

        public static Dictionary<string, string> CLGMenu = new Dictionary<string, string> {
            {"CLG", "CLG Details"},
            {"AuditLog", "Record Activity Log"},
            {"Document", "Attachments"},
        };

        public static bool IsCurrentPage(string controller, string controllerName)
        {
            if (controller.Equals(controllerName)) return true;
            if (controller == "CLG")
            {
                return CLGMenu.ContainsKey(controllerName);
            }
            return false;
        }
    }

    public class StringLiteral
    {
        public static string BooleanYes = "Yes";
        public static string BooleanNo = "No";
        public static string Dash = "-";
        public static string NoValue = "Undetermined";
    }
}
