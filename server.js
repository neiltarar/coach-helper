const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001; // Note: using a different port to normal
const db = require("./database/db");
const expressSession = require("express-session");
const bodyParser = require("body-parser");

// Import All Controllers
const usersController = require("./controllers/users");
const trainingSessionsController = require("./controllers/trainingSessions");

// Connect to the DB and create session Table
const connectPgSimple = require("connect-pg-simple");
const req = require("express/lib/request");
const pgSession = connectPgSimple(expressSession);

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

app.use(
  expressSession({
    store: new pgSession({
      pool: db, // Connects to our postgres db
      createTableIfMissing: true, // Creates a session table in your database (go look at it!)
    }),
    secret: process.env.EXPRESS_SESSION_SECRET_KEY,
    cookie: { maxAge: oneDay },
    resave: false, //gets rid of deprecated messages
    saveUninitialized: false, //gets rid of deprecated pmessages
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "./client/build")));

app.use("/api/users/", usersController);
app.use("/api/training-sessions", trainingSessionsController);

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
