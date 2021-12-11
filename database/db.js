const pg = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const db = new pg.Pool({
  user: process.env.DB_USERNAME,
  database: "coach-helper",
  password: process.env.DB_PASSWORD,
});

module.exports = db;
