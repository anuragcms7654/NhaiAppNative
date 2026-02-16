# app.use() registers middleware for all HTTP methods and uses prefix path matching (e.g., /users matches /users/1). It’s mainly used for global logic or mounting routers.

# app.get(), app.post(), etc. handle specific HTTP methods and match the exact route path. They are primarily used to define route controllers.