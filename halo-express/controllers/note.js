const Note = require('../models/note.js');

function create(req, res) {
  res.render('notes/create');
}

function add(req, res) {
  const note = req.body;
  note.createdAt = new Date();
  Note.add(note);
  res.redirect('/');
}

function edit(req, res) {
  const note = Note.get(req.params.id);
  res.render('notes/edit', { note: note });
}

function update(req, res) {
  const { id } = req.params;
  Note.update(id, req.body);
  res.redirect(`/`);
}

function remove(req, res) {
  const { id } = req.params;
  Note.remove(id);
  res.redirect(`/`);
}

module.exports = {
  create: create,
  add: add,
  edit: edit,
  update: update,
  remove: remove
};
