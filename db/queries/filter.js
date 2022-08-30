const db = require('../connection');

const getFilteredListings = options => {

  // console.log(options);

  const queryParams = [];

  let queryString = `
  SELECT video_game_listings.*, video_game_reviews.rating AS rating
  FROM video_game_reviews
  RIGHT JOIN video_game_listings ON video_game_reviews.video_game_id = video_game_listings.id
  WHERE 1 = 1
  `;

    if (options.name !== "") {
      queryParams.push(`%${options.name}%`);
      queryString += ` AND name ILIKE $${queryParams.length} `;
    }

    if (options.maximum_price !== "") {
      queryParams.push(`${options.maximum_price}`);
      queryString += ` AND price <= $${queryParams.length} `;
    }

    if (options.minimum_rating !== "") {
      queryParams.push(`${options.minimum_rating}`);
      queryString += ` AND rating >= $${queryParams.length} `;
    }

    queryString += `
  ORDER BY price
  `;

  return db.query(queryString, queryParams)
    .then((res) => res.rows);

};

module.exports = { getFilteredListings };
