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
  await User.add(user);
  // Loged in user
  res.redirect('/');
}

async function process_login(req, res) {
  const match = await User.login(req.body.email, req.body.password);
  if (match === true) {
    console.log('Login success');
    res.redirect('/');
  } else {
    console.log('Login failed');
    res.redirect('/');
  }
}

module.exports = {
  register: register,
  add: add,
  login: login,
  process_login: process_login
};
