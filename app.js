const express = require('express');
const layouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const logger = require('morgan');

const router = require('./routes/router.js');
const userRouter = require('./routes/user.js');
const errorRouter = require('./routes/error.js');

const COOKIE_SECRET = 'rahasia' || process.env.COOKIE_SECRET;
const SESSION_SECRET = 'r4h4514' || process.env.SESSION_SECRET;

const app = express();

const ISPROD = process.env.NODE_ENV === 'production';

// Form Stuff
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Static Files
app.use(express.static('public'));

// Setup Views
app.set('view engine', 'ejs');
app.use(layouts);

// Middlewares
app.use(logger('dev'));
app.use(require('cookie-parser')(COOKIE_SECRET));
app.use(
  require('express-session')({
    name: 'sid',
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 2,
      sameSite: true,
      secure: false
    }
  })
);
app.use(require('./middlewares/flash.js'));

// Setup Routes
app.use(router);
app.use('/users/', userRouter);
app.use(errorRouter);

// Setup helpers
app.locals.noteAge = require('./util/helpers.js').noteAge;

module.exports = app;
