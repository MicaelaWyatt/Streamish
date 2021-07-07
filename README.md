## Streamish

Streamish is a social app for sharing videos with others. For the time being we'll focus on using building a Web API. In future chapters we'll be creating a React application that will interact with the API. Along the way we'll dig into some more complex queries.

### Project Setup

1. Create the `Streamish` database using the [SQL script](./sql/Streamish.sql).
1. Use Visual Studio to create a new ASP<span>.</span>NET Core Web Application project called "Streamish". Make suse to choose the "API" template when prompted.
1. Use Visual Studio's Nuget Package Manager to install the `Microsoft.Data.SqlClient` nuget package.
1. Add the database connection string to the `appsettings.json` file.
1. Spend a little while familiarizing yourself with the Streamish ERD
    ![Streamish ERD](./images/Streamish_ERD.png)
