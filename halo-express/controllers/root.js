const { getAll } = require('../models/note.js');
const { isLogin } = require('../middlewares/check_login.js');

async function index(req, res) {
  const notes = await getAll();
  res.render('index', { notes: notes, isLogin: isLogin(req, res) });
}

module.exports = {
  index
};
