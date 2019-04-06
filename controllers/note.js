const Note = require('../models/note.js');

function create(req, res) {
  res.render('notes/create');
}

async function add(req, res) {
  await Note.add(req.body);
  req.session.flash = {
    text: 'Note created.'
  };
  res.redirect('/');
}

async function edit(req, res) {
  const note = await Note.get(req.params.id);
  res.render('notes/edit', { note: note });
}

async function update(req, res) {
  const { id } = req.params;
  await Note.update(id, req.body);
  res.redirect(`/`);
}

async function remove(req, res) {
  const { id } = req.params;
  await Note.remove(id);
  res.redirect(`/`);
}

module.exports = {
  create: create,
  add: add,
  edit: edit,
  update: update,
  remove: remove
};
