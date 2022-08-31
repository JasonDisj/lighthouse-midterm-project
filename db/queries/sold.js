const db = require('../connection');

// ADMIN: delete a listing
const markAsSold = (gameId, userId) => {
  return db
    .query(`UPDATE video_game_listings
    SET is_stocked = FALSE
    WHERE video_game_listings.id = $1
    AND video_game_listings.admin_id = $2;`, [gameId, userId]
    )
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log('error', err);
    })
}

module.exports = { markAsSold };
