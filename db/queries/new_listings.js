const db = require('../connection');

// ADMIN: add new listings

const addListing = function (game, userId) {
  return db
    .query(`INSERT INTO video_game_listings (name, company, platform, description, price, cover_photo_url, admin_id) VALUES
         ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`,
      [game.name, game.company, game.platform, game.description, game.price, game.cover_photo_url, userId])
    .then((result) => {
      return result.rows[0];
    })

    .catch((err) => {
      console.log('error', err);
    })
}

module.exports = { addListing };
