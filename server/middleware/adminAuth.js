const jwt = require("jsonwebtoken");
const { verifyToken } = require("../utils/createToken");
const User = require("../models/user");

const admin = async (req, res, next) => {
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

    const user = await User.findById(isVerified.id);

    if(user.type == 'user' || user.type == 'seller'){
      return res.status(401).json({msg : "You are not a admin!"});
    }


    req.user = isVerified.id;
    req.token = token;
    next();
  } catch (e) {
    res.status(500).json({ error: e.messgae });
  }
};

module.exports = admin;
