function getAll() {
  const notes = [
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
  return notes;
}

module.exports = {
  getAll: getAll
};
