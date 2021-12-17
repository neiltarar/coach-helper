const db = require("../database/db");

const trainingSessions = {
  getAllSessions() {
    const sql = "SELECT * FROM trainingsessions";
    return db.query(sql).then((dbRes) => dbRes.rows);
  },
};

module.exports = trainingSessions;
