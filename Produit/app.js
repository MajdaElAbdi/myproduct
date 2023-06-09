//var createError = require('http-errors');
var express = require('express');
///var path = require('path');
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');
app.use(express.json());
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/UserRoute');

var app = express();
var bodyParser = require('body-parser');
 
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



 
//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});*/

module.exports = app;
