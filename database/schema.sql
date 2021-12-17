CREATE TABLE users (
user_id serial PRIMARY KEY,
username VARCHAR(20),
email VARCHAR(50),
password VARCHAR(100)
);

CREATE TABLE trainingSessions (
    session_id serial PRIMARY KEY,
    date date,
    type VARCHAR(20),
    location VARCHAR(20),
    name VARCHAR(20),
    session VARCHAR(200),
    totalReps VARCHAR(20)
);