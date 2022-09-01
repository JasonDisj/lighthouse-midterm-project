const db = require('../connection');

// show user's email
const showEmail = (userId) => {
  return db
    .query(`SELECT email FROM users
    WHERE id = $1;`, [userId]
    )

    .then((result) => {
      console.log(result.rows);
      return result.rows[0].email;
    })

    .catch((err) => {
      console.log('error', err);
    })
}

module.exports = { showEmail };
