it has 4 params, express detect if app.use's callback has 4 params, then the first one should be th e error handling middleware


# Error middleware must be last.

Example 
app.use('/api', routes);

app.use(notFoundHandler);  // 404

app.use(errorHandler);     // 500

# Error-handling middleware in Express is a middleware with four parameters (err, req, res, next) used to centrally handle application errors. It must be defined after routes. Errors are forwarded using next(err) and Express skips normal middleware to invoke the error handler.