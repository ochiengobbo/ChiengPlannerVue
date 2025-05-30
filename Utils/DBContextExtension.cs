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

            if (applied.Count() == 0 ||  total.Count() == 0 )
            {
                return false;
            }

            return !total.Except(applied).Any();
        }

        public static void EnsureSeeded(this ChiengPlannerContext context)
        {
            ApplicationDataInitializer dataInitializer = new ApplicationDataInitializer(context);
            dataInitializer.Initialize();
        }
    }
}
