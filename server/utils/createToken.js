const jwt = require("jsonwebtoken");

module.exports.createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY);
};

module.exports.verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY);
};