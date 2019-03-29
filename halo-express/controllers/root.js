const { getAll } = require('../models/note.js');

async function index(req, res) {
  const notes = await getAll();
  res.render('index', { notes: notes });
}

module.exports = {
  index
};
