const db = require('../connection');

// ADMIN: delete a listing
const deleteListing = () => {
  return db
    .query(`DELETE FROM video_game_listings
    WHERE video_game_listings.id = $1;`, [video_game_listings.id]
    )
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log('error', err);
    })
}

module.exports = { deleteListing };
