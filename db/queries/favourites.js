const db = require('../connection');


const favouriteListing = function(favouriteGame) {
  return db
    .query(`INSERT INTO favourites (customer_id, video_game_id)
    SELECT users.id, video_game_listings.id FROM video_game_listings
    JOIN users ON users.id = video_game_listings.id
    WHERE video_game_listings.name ILIKE '%
    ($1, $2) RETURNING *;`,
      [favouriteGame.customer_id, favouriteGame.video_game_id])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log('error', err);
    })
}

module.exports = { favouriteListing };
