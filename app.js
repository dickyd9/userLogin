// import express
const express = require('express');
const app = express();
const port = 5000;

//import library
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

// import router
const indexRouter = require('./routes');
const hotelRouter = require('./hotel/route');

//app use
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(express.json());

// use Router
app.use('/', indexRouter);
app.use('/hotel', hotelRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`)
})

module.exports = app;