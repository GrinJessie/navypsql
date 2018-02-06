DROP TABLE IF EXISTS fleets, ships, duties,sailors;

CREATE TABLE fleets (
  id SERIAL PRIMARY KEY,
  "name" VARCHAR(50)
 );
 CREATE TABLE ships (
  id SERIAL PRIMARY KEY,
  "name" VARCHAR(50),
  date_built DATE,
  fleet_id INTEGER
 );
 CREATE TABLE duties (
  id SERIAL PRIMARY KEY,
  ship_id INTEGER,
  sailor_id INTEGER,
  rank INTEGER,
  start_date DATE,
  end_date DATE
 );
 CREATE TABLE sailors (
   id SERIAL PRIMARY KEY,
   "name" VARCHAR(50),
   birthday DATE
 );

-- SELECT 'hello, PG';