function getAll() {
  const notes = [
    {
      _id: 1,
      title: 'How to learn Node.js',
      body: 'This is my notes on how to learn node.js',
      createdAt: new Date()
    },
    {
      _id: 2,
      title: 'Talk is cheap',
      body: 'Talk is cheap. Show me code!',
      createdAt: new Date()
    }
  ];
  return notes;
}

module.exports = {
  getAll: getAll
};
