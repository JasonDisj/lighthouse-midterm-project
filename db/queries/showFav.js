const db = require('../connection');


const showFav = function(customer_id) {
  return db
    .query(`SELECT * FROM favourites
    JOIN video_game_listings ON video_game_id = video_game_listings.id
    WHERE customer_id = $1
    `,
      [customer_id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log('error', err);
    })
}

module.exports = { showFav };
