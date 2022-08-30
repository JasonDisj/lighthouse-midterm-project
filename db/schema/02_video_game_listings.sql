DROP TABLE IF EXISTS video_game_listings CASCADE;

CREATE TABLE video_game_listings (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  platform VARCHAR(255) NOT NULL,
  description TEXT,
  price INTEGER NOT NULL,
  cover_photo_url TEXT NOT NULL,
  is_stocked BOOLEAN DEFAULT TRUE,
  admin_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);
