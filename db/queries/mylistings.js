const db = require('../connection');

// ADMIN: show his own listings

const myListings = (userId) => {
  return db
    .query(`SELECT video_game_listings.*, users.name AS user_name FROM video_game_listings
    JOIN users ON users.id = video_game_listings.admin_id
    WHERE admin_id = $1
    ORDER BY video_game_listings.id DESC;`, [userId]
    )

    .then((result) => {
      console.log(result.rows[0]);
      return result.rows;
    })

    .catch((err) => {
      console.log('error', err);
    })
}

module.exports = { myListings };
