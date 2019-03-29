const NOTES = [
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

function add(data) {
  const newData = data;
  newData['_id'] = NOTES.length - 1;
  NOTES.push(newData);
  return NOTES;
}

module.exports = {
  getAll: getAll,
  add: add
};
