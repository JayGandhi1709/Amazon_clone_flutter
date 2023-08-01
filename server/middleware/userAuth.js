const jwt = require("jsonwebtoken");
const { verifyToken } = require("../utils/createToken");

const userAuth = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    
    if (!token) {
      return res.status(401).json({ msg: "No auth token, access decined." });
    }
    
    const isVerified = verifyToken(token);
    
    if (!isVerified) {
      return res
        .status(401)
        .json({ msg: "Token verification failed, authorization denied." });
    }

    req.user = isVerified.id;
    req.token = token;
    next();
  } catch (e) {
    res.status(500).json({ error: e.messgae });
  }
};

module.exports = userAuth;
