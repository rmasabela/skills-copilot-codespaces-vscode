// Create web server
var express = require('express');
var app = express();

// Use comments router
var commentsRouter = require('./routers/comments');
app.use('/comments', commentsRouter);

// Start server
app.listen(3000, function () {
  console.log('Server is listening on port 3000');
});