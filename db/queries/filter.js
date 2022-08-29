const db = require('../connection');

const getFilteredListings = options => {

  const queryParams = [];

  let queryString = `
  SELECT video_game_listings.*, video_game_reviews.rating as rating
  FROM video_game_listings
  JOIN video_game_reviews ON video_game_id = video_game_listings.id
  WHERE 1 = 1
  `;

  if (options.name) {
    queryParams.push(`%${options.name}%`);
    queryString += ` AND name ILIKE $${queryParams.length} `;
  }

  if (options.maximum_price) {
    queryParams.push(`${options.maximum_price}`);
    queryString += ` AND price <= $${queryParams.length} `;
  }

  if (options.minimum_rating) {
    queryParams.push(`${options.minimum_rating}`);
    queryString += ` AND rating >= $${queryParams.length} `;
  }

  queryString += `
  ORDER BY price
  `;

  return pool.query(queryString, queryParams)
    .then((res) => res.rows)
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { getFilteredListings };
