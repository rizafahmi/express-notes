const express = require('express');

const router = require('./routes/router.js');

const app = express();

// Static Files
app.use(express.static('public'));

// Setup Views
app.set('view engine', 'ejs');

// Setup Routes
app.use(router);

// Setup helpers
app.locals.noteAge = require('./util/helpers.js').noteAge;

module.exports = app;
