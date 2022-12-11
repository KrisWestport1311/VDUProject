const jwt = require("jsonwebtoken");

const verifytoken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next("Wrong details");

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next("Token is not valid");
    req.user = user;
    next();
  });
};

module.exports = verifytoken;
