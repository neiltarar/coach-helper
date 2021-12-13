const sessionAuth = (res, req, next) => {
  if (req.session.username && req.session.userId) {
    console.log("logged in");
    next();
  } else {
    res.status(401).send({ message: "Wrong Username or Password" });
    console.log("not logged in");
  }
};

module.exports = sessionAuth;
