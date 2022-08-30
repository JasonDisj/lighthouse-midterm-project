const db = require('../connection');


const addListing = function(game) {
  return db
    .query(`INSERT INTO video_game_listings (name, company, platform, description, price, cover_photo_url) VALUES
         ($1, $2, $3, $4, $5, $6) RETURNING *;`,
      [game.name, game.company, game.platform, game.description, game.price, game.cover_photo_url])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log('error', err);
    })
}

module.exports = { addListing };
