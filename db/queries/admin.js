const db = require('../connection');

const getUsers = () => {
  return db
    .query('SELECT name FROM users WHERE is_admin = TRUE;')
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log('error', err);
    })
}

module.exports = { getUsers };
