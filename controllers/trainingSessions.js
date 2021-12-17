const express = require("express");
const trainingSessionsDB = require("../models/trainingSessions");
const trainingSessionsController = express.Router();

trainingSessionsController.get("/", (req, res) => {
  trainingSessionsDB.getAllSessions().then(async (response) => {
    res.json(response);
  });
});

module.exports = trainingSessionsController;
