let NOTES = [
  {
    _id: 1,
    title: 'How to learn Node.js',
    body: 'This is my notes on how to learn node.js',
    createdAt: new Date('2019-02-22')
  },
  {
    _id: 2,
    title: 'Talk is cheap',
    body: 'Talk is cheap. Show me code!',
    createdAt: new Date('2018-12-25')
  }
];

function getAll() {
  return NOTES;
}

function get(id) {
  const notes = NOTES.filter(function(note) {
    return note._id === parseInt(id);
  });
  return notes[0];
}

function add(data) {
  const newData = data;
  newData['_id'] = NOTES.length - 1;
  NOTES.push(newData);
  return NOTES;
}

function update(id, data) {
  // delete current note
  const newNotes = NOTES.filter(function(note) {
    return note._id !== parseInt(id);
  });
  NOTES = newNotes;

  // add new note
  const newNote = data;
  newNote._id = parseInt(id);
  newNote.createdAt = new Date();
  NOTES.push(newNote);
  return NOTES[id];
}

module.exports = {
  getAll: getAll,
  get: get,
  add: add,
  update: update
};
