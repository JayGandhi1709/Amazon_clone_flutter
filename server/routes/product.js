const express = require('express');
const userAuth = require('../middleware/userAuth');
const { products, search_product,rate_product,deal_of_day } = require('../controller/productController');
const productRoute = express.Router();


productRoute.get("/api/products", userAuth, products);
productRoute.get("/api/products/search/:searchQuery", userAuth, search_product);
productRoute.post("/api/rate-product", userAuth, rate_product);
productRoute.get("/api/deal-of-day", userAuth, deal_of_day);


module.exports = productRoute;