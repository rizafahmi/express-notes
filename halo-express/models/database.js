const massive = require('massive');

let db = null;

async function getDB(env) {
  if (db !== null) return db;

  try {
    let db_url = '';
    if (env.NODE_ENV !== 'production') {
      db_url = 'postgres://postgres:@127.0.0.1:5432/express_notes_dev';
    } else {
      db_url = process.env['DATABASE_URL'];
    }
    db = await massive({
      connectionString: db_url
    });
  } catch (err) {
    console.error(err);
    return null;
  }
}

module.exports = getDB;
