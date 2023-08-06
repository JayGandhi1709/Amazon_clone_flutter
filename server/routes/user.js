const express = require('express');
const userAuth = require('../middleware/userAuth');
const { add_to_cart,remove_from_cart } = require('../controller/userController');
const userRoute = express.Router();


userRoute.post("/api/add-to-cart", userAuth, add_to_cart);
userRoute.delete("/api/remove-from-cart/:id", userAuth, remove_from_cart);


module.exports = userRoute;