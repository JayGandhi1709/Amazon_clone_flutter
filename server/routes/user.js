const express = require('express');
const userAuth = require('../middleware/userAuth');
const { add_to_cart,remove_from_cart,save_user_address,order,my_orders } = require('../controller/userController');
const userRoute = express.Router();

// POST
userRoute.post("/api/add-to-cart", userAuth, add_to_cart);
userRoute.post("/api/save-user-address", userAuth, save_user_address);
userRoute.post("/api/order", userAuth, order);

// DELETE
userRoute.delete("/api/remove-from-cart/:id", userAuth, remove_from_cart);

// GET
userRoute.get("/api/orders/me",userAuth,my_orders);


module.exports = userRoute;