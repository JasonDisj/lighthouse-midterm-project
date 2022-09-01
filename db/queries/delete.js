const db = require('../connection');

// ADMIN: delete a listing
const deleteListing = (deletedGame, userId) => {
  return db
    .query(`DELETE FROM video_game_listings
    WHERE video_game_listings.id = $1
    AND video_game_listings.admin_id = $2;`, [deletedGame, userId]
    )

    .then((result) => {
      return result;
    })

    .catch((err) => {
      console.log('error', err);
    })
}

module.exports = { deleteListing };
