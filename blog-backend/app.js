var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var db = require('./app/service/datebase');
var routes = require('./config/routes/index');
var users = require('./config/routes/users');
var articles = require('./config/routes/articles');

var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.session({secret: 'react-blog', cookie: {maxAge: 60000}}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/articles', articles);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

passport.use('local', new localStrategy(
    function (username, password, done) {
      var user = {
        id: "1",
        username: "admin",
        password: "pass"
      };

      if(username != user.username){
        return done(null, false, {message: "不正确的用户名"});
      }

      if(password != user.password){
        return done(null, false, {message: "不正确的密码"});
      }

      return done(null, user);
    }
));

passport.serializeUser(function (user, done) {
  done(null, user);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
