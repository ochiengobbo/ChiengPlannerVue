# ChiengPlanner

The ChiengPlanner is an eponymous small project that serves as a virtual planner notebook. This project was made as an effort to streamline my organizational efforts and try to use the knowledge gained from working professionally within the .NET framework to create a full web application. Currently the ChiengPlanner consists of these features:

* A **Notes** section that provides the user with a WYSIWYG text editor to create long descriptive Note documents
* A **Checklist** section that allows the user to create, update, and delete Checklists and the Tasks within those Checklists.

## How To Use

The [ChiengPlanner](https://chiengplannervue.fly.dev/) application is currently live and being hosted by [fly.io](https://fly.io/). However if you would like to run this application locally you will need a few things. 

You will need [Git](https://git-scm.com), [npm](http://npmjs.com), [SSMS](https://learn.microsoft.com/en-us/ssms/sql-server-management-studio-ssms) or [SqlLite](https://sqlite.org/index.html), any IDE with .NET support but preferably [Visual Studio](https://visualstudio.microsoft.com/), and a [Microsoft Azure](https://portal.azure.com/) account with a Blob Container. 

* Clone the repository, either through Git or through Visual Studio

* In your personal secrets file, you must add the following strings
  * **AzureConnection**: the blob container Azure Connection string.
  * **DefaultDBConnection**: the SQL Server connection string.
    * If you want to use **SqlLite**, change "UseSqlServer()" in Program.cs to "UseSqlite()" and reference either the local SqlLite db provided or your own.
  * **IdleTimeout**: Time in minutes for Session Idle Timeout
  * **MaxCookieAge**: Max age in hours for all created application cookies.
  * **SecurityValidationTimeSpan**: Time in hours before .NET security validation checks on logged in users.

* Run the application through Visual Studio and you should be good to go!

## Credits

This software uses the following open source packages (along with numerous packages provided through the [.NET Framework](https://dotnet.microsoft.com/en-us/download)):

- [TipTap](https://tiptap.dev/product/editor)
- [Vue](https://vuejs.org/)
- [jQuery](https://jquery.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Webpack](https://webpack.js.org/)
- [SASS](https://sass-lang.com/documentation/syntax/)
