const sessionAuth = require("../middleware/sessionAuth");
const express = require("express");
const trainingSessionsDB = require("../models/trainingSessions");
const trainingSessionsController = express.Router();

trainingSessionsController.get("/", (req, res) => {
  trainingSessionsDB.getAllSessions().then(async (response) => {
    res.json(response);
  });
});

trainingSessionsController.post("/add-session", (req, res) => {
  trainingSessionsDB
    .addTrainingSession(
      req.body.type,
      req.body.location,
      req.body.session,
      req.body.info,
      req.body.reps
    )
    .then(res.json("added"));
});

trainingSessionsController.delete("/:id/remove", async (req, res) => {
  const id = req.params.id.split(",");
  console.log(id);
  id.map((session) => trainingSessionsDB.deleteTrainingSession(session));
  res.json({ status: "delete request received" });
});

module.exports = trainingSessionsController;
