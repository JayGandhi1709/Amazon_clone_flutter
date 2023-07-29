// Import From packages
const bcryptjs = require("bcryptjs");

// Import From Files
const { createToken, verifyToken } = require("../utils/createToken");

// Import Modles
const User = require("../models/user");

module.exports.user_signup = async (req, res) => {
  try {
    // Get The Data From Client
    const { name, email, password } = req.body;
    // console.log(name, email, password);

    const existingUser = await User.findOne({ email });

    // Post The Data In Database
    if (existingUser) {
      return res
        .status(400)
        .json({ msg: "User with same email already exist!" });
    }

    const hashedPassword = await bcryptjs.hash(password, 8);

    let user = new User({ email, password: hashedPassword, name });

    user = await user.save();

    // Return that Data To User
    res.json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports.user_signin = async (req, res) => {
  try {
    // Get The Data From Client
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    // Post The Data In Database
    if (!user) {
      return res
        .status(400)
        .json({ msg: "User with this email does not exist!" });
    }

    const match = await bcryptjs.compare(password, user.password);

    if (!match) {
      return res.status(400).json({ msg: "Incorrect password" });
    }

    const token = createToken(user._id);

    // Return that Data To User
    res.json({ token, ...user._doc });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports.tokenIsValid = async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const isVerified = verifyToken(token);
    if (!isVerified) return res.json(false);

    const user = await User.findById(isVerified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports.getUser = async (req, res) => {
  const user = await User.findById(req.user);
  res.json({ ...user._doc, token: req.token });
};
