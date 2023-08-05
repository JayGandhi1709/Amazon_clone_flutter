const express = require('express');
const adminAuth = require("../middleware/adminAuth");
const { add_product, delete_product } = require('../controller/adminController');

const adminRoute = express.Router();

adminRoute.post("/admin/add-product",adminAuth,add_product);
adminRoute.post("/admin/delete-product",adminAuth,delete_product);

// GET
adminRoute.get("/admin/get-product",adminAuth,add_product);

module.exports = adminRoute;