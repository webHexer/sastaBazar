// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;

const express = require("express");
const app = express();
const port = 8000;
const indexRouter = require("./routes/index");
const userRouter = require("./routes/users");
const bannersRouter = require("./routes/banners");
const categoriesRouter = require("./routes/categories");

const cors = require("cors");
app.use("/api", cors(), indexRouter);
app.use("/api", cors(), userRouter);
app.use("/api", cors(), bannersRouter);
app.use("/api", cors(), categoriesRouter);

// const user = require("./data/users.json");

// console.log(user);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
