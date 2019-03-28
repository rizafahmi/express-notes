const { getAll } = require('../models/note.js');

function index(req, res) {
  const notes = getAll();
  res.render('index', { notes: notes });
}

module.exports = {
  index
};
