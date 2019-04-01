const express = require('express');
const layouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const logger = require('morgan');

const router = require('./routes/router.js');
const errorRouter = require('./routes/error.js');

const app = express();

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

// Setup Routes
app.use(router);
app.use(errorRouter);

// Setup helpers
app.locals.noteAge = require('./util/helpers.js').noteAge;

module.exports = app;
