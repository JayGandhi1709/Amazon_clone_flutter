// INPORTS FORM PACKAGES
const express = require("express");

// Controllers
const {
  user_signup,
  user_signin,
  tokenIsValid,
  getUser,
} = require("../controller/authController");

// Middleware
const userAuth = require("../middleware/userAuth");

// MIDDLEWARE
// CLIENT -> MIDDLEWARE -> SERVER -> CLIENT

// INIT
const authRouter = express.Router();

// POST
authRouter.post("/api/signup", user_signup);
authRouter.post("/api/signin", user_signin);
authRouter.post("/tokenIsValid", tokenIsValid);

// GET
authRouter.get("/", userAuth, getUser);

module.exports = authRouter;
