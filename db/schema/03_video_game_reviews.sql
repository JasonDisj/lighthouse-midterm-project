DROP TABLE IF EXISTS video_game_reviews CASCADE;

CREATE TABLE video_game_reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  video_game_id INTEGER REFERENCES video_game_listings(id) ON DELETE CASCADE,
  customer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  rating SMALLINT NOT NULL DEFAULT 0,
  comment TEXT
);
