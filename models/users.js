const db = require("../database/db");

const userDB = {
  createUser(firtsName, lastName, email, password_hash) {
    const sql =
      "INSERT INTO users (firstname, lastname, email, password_hash) VALUES ($1, $2, $3, $4)";
    const values = [firtsName, lastName, email, password_hash];
    return db.query(sql, values).then((dbRes) => dbRes.rows);
  },
  getUser(email) {
    const sql = "SELECT * FROM users WHERE email = $1";
    const values = [email];
    return db.query(sql, values).then((dbRes) => dbRes.rows);
  },
};

module.exports = userDB;
