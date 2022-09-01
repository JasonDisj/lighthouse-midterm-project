const db = require('../connection');

// all users can have a favourite listing
const favouriteListing = function (favouriteGame, customer_id) {
  console.log(customer_id, favouriteGame);
  return db
    .query(`INSERT INTO favourites (customer_id, video_game_id) VALUES
    ($1, $2) RETURNING *;`,
      [customer_id, favouriteGame])

    .then((result) => {
      console.log('result', result.rows);
      return result.rows[0];
    })

    .catch((err) => {
      console.log('error', err);
    })
}

module.exports = { favouriteListing };
