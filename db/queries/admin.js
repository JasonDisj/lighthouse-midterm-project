const db = require('../connection');

// find who is an admin from user table

const getUsers = (id) => {
  return db
    .query('SELECT * FROM users WHERE id = $1;', [id])

    .then((result) => {
      return result.rows[0];
    })

    .catch((err) => {
      console.log('error', err);
    })
}

module.exports = { getUsers };
