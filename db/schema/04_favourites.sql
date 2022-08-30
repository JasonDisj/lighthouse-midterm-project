DROP TABLE IF EXISTS favourites CASCADE;

CREATE TABLE favourites (
  customer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  video_game_id INTEGER REFERENCES video_game_listings(id) ON DELETE CASCADE
);
