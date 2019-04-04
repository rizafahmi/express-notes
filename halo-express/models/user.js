const bcrypt = require('bcrypt');
const config = require('../knexfile.js')[process.env.NODE_ENV || 'development'];
const db = require('knex')(config);

async function add(data) {
  try {
    const { email, password } = data;
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    return db('user').insert({ email: email, password: hashPassword }, 'id');
  } catch (err) {
    console.error(err.message);
  }
}

function get(email) {
  try {
    return db
      .select()
      .from('user')
      .where({ email })
      .first();
  } catch (err) {
    console.error(err.message);
  }
}

async function login(email, password) {
  const user = await get(email);
  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) return user;
    else return false;
  } else {
    return false;
  }
}

module.exports = {
  add: add,
  get: get,
  login: login
};
