const express = require("express");
const usersController = express.Router();

usersController.post("/sign-in", (req, res) => {
  console.log(req.body);
  res.json({ received: "OK" });
});

usersController.post("/sign-up", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log(req.body);
  res.json({ received: "OK" });
});

module.exports = usersController;
