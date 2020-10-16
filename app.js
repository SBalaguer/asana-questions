'use strict';

const { join } = require('path');
const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const serveFavicon = require('serve-favicon');
const indexRouter = require('./routes/index');
const cors = require('cors');
const path = require('path');

const app = express();

app.set('trust proxy', 1);
app.set('views', path.join(__dirname, 'views'));

const whitelist = ['https://test.asanacup.com/', process.env.FRONT_END_URL];

app.use(serveFavicon(join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONT_END_URL],
    credentials: true
  })
);
// app.use(
//   cors({
//     origin: function(origin, callback) {
//       if (whitelist.indexOf(origin) !== -1) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//     credentials: true
//   })
// );

app.use('/', indexRouter);

// Catch missing routes and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Catch all error handler
app.use((error, req, res, next) => {
  // Set error information, with stack only available in development
  res.locals.message = error.message;
  res.locals.error = req.app.get('env') === 'development' ? error : {};
  console.log('error', error);
  res.status(error.status || 500);
  res.json({ type: 'error', error: { message: error.message } });
});

module.exports = app;
