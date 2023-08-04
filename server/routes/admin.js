const express = require('express');
const adminAuth = require("../middleware/adminAuth");
const { add_product } = require('../controller/adminController');

const adminRoute = express.Router();

adminRoute.post("/admin/add-product",adminAuth,add_product);

// GET
adminRoute.get("/admin/get-product",adminAuth,add_product);

module.exports = adminRoute;