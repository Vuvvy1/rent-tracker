DROP TABLE IF EXISTS properties CASCADE;
DROP TABLE IF EXISTS prices CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE properties (
  id SERIAL PRIMARY KEY NOT NULL,
  province VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  street_address VARCHAR(255) NOT NULL,
  latitude DECIMAL(12,9),
  longitude DECIMAL(12,9)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE prices (
  id SERIAL PRIMARY KEY NOT NULL,
  property_id INTEGER REFERENCES properties(id),
  user_id INTEGER REFERENCES users(id),
  admin_status VARCHAR(255) NOT NULL DEFAULT 'pending',
  date DATE NOT NULL,
  price NUMERIC NOT NULL,
  documentation VARCHAR(255) NOT NULL,
  photo VARCHAR(255),
  property_type VARCHAR(255) NOT NULL,
  square_footage INTEGER NOT NULL,
  number_of_bedrooms INTEGER NOT NULL,
  number_of_bathrooms INTEGER NOT NULL
);