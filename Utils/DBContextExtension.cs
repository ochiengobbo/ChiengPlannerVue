using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore;
using ChiengPlannerVue.Models;

namespace ChiengPlannerVue.Utils
{
    public static class DBContextExtension
    {
        public static bool AllMigrationsApplied(this DbContext context)
        {
            var applied = context.GetService<IHistoryRepository>()
                .GetAppliedMigrations()
                .Select(m => m.MigrationId);

            var total = context.GetService<IMigrationsAssembly>()
                .Migrations
                .Select(m => m.Key);

            return !total.Except(applied).Any();
        }

        public static void EnsureSeeded(this ApplicationContext context)
        {
            ApplicationDataInitializer dataInitializer = new ApplicationDataInitializer(context);
            dataInitializer.Initialize();
        }
    }
}
