const User = require('../models/user.js');

function register(req, res) {
  res.render('users/register');
}

function login(req, res) {
  res.render('users/login');
}

async function add(req, res) {
  // TODO: Validate data
  const { email, password } = req.body;

  const user = {
    email,
    password
  };
  // Add to user table
  const newUser = await User.add(user);
  // Loged in user
  req.session.userId = newUser[0];
  res.redirect('/');
}

async function process_login(req, res) {
  const user = await User.login(req.body.email, req.body.password);
  if (user === false) {
    res.redirect('/users/login');
  } else {
    req.session.userId = user.id;
    res.redirect('/');
  }
}

function logout(req, res) {
  req.session.destroy((err) => {
    if (err) {
      res.redirect('/');
    }
    res.clearCookie('sid');
    res.redirect('/users/login');
  });
}

module.exports = {
  register: register,
  add: add,
  login: login,
  process_login: process_login,
  logout: logout
};
