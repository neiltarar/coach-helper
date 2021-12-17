const express = require("express");
const trainingSessionsDB = require("../models/trainingSessions");
const trainingSessionsController = express.Router();

trainingSessionsController.get("/", (req, res) => {
  console.log("this is the request: ", req.body);
  trainingSessionsDB.getAllSessions().then(async (response) => {
    res.json(response[0]);
  });
});

module.exports = trainingSessionsController;
