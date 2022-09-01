const db = require('../connection');

// ADMIN: show all listings
const showEmail = (userId) => {
  return db
    .query(`SELECT email FROM users
    WHERE id = $1;`, [userId]
    )
    .then((result) => {
      console.log(result.rows);
      // console.log(result.rows[0]);
      return result.rows[0].email;

    })
    .catch((err) => {
      console.log('error', err);
    })
}

module.exports = { showEmail };
