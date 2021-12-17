const userDB = require("../models/users");
const bcrypt = require("bcrypt");
const express = require("express");
const usersController = express.Router();

usersController.post("/sign-in", sessionAuth, (req, res) => {
  const { email, password } = req.body;

  userDB.getUser(email).then((response) => {
    if (response.length > 0) {
      const password_check = (passwordPlain, passwordHash) => {
        return bcrypt.compareSync(passwordPlain, passwordHash);
      };

      const password_hash = response[0].password_hash;
      const user_id = response[0].user_id;

      const isValidPassword = password_check(password, password_hash);
      console.log("pasword validity: ", isValidPassword);
      if (isValidPassword) {
        req.session.username = email;
        req.session.userID = user_id;
        res.status(200).json({ login: true });
      } else {
        res.status(403).json({ login: false });
      }
    } else {
      res.status(403).json({ login: false });
    }
    // res is our sql enquiry to see if there is a user with the
    // same email and password, which comes as a list,
    // therefore if its lengts is zero it means that there is no match
  });
});

usersController.post("/sign-up", (req, res) => {
  // Create a function to hash users password
  const generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
  };

  // Collect all the user information from the axios post request
  const { firstName, lastName, email, password } = req.body;

  // Hash user's password with the function created above
  const password_hash = generateHash(password);

  // Put all the information in the DB
  userDB
    .createUser(firstName, lastName, email, password_hash)
    .then((response) => {
      res.status(201).json(response);
      console.log(`User ${email} added successfully.`);
    });
});

module.exports = usersController;
