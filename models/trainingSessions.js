const db = require("../database/db");

const trainingSessions = {
  getAllSessions() {
    const sql = "SELECT * FROM trainingsessions";
    return db.query(sql).then((dbRes) => dbRes.rows);
  },
  addTrainingSession(type, location, name, session, totalreps) {
    const sql =
      "INSERT INTO trainingsessions (type, location, name, session, totalreps) VALUES ($1, $2, $3, $4, $5)";
    const values = [type, location, name, session, totalreps];
    return db.query(sql, values).then((dbRes) => dbRes.rows);
  },
  deleteTrainingSession(id) {
    const sql = "DELETE FROM trainingsessions WHERE session_id = $1";
    const value = [id];
    return db.query(sql, value).then((dbRes) => dbRes.rows);
  },
};

module.exports = trainingSessions;
