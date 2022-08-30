const db = require('../connection');


const favouriteListing = function(favouriteGame, customer_id) {
  return db
    .query(`INSERT INTO favourites (customer_id, video_game_id) VALUES
    ($1, $2) RETURNING *;`,
      [customer_id, favouriteGame])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log('error', err);
    })
}

module.exports = { favouriteListing };
