const express = require('express');
const userAuth = require('../middleware/userAuth');
const { products } = require('../controller/productController');
const productRoute = express.Router();


productRoute.get("/api/products", userAuth, products);


module.exports = productRoute;