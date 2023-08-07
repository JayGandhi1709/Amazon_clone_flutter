const express = require('express');
const adminAuth = require("../middleware/adminAuth");
const { add_product, delete_product,get_orders,change_order_status,analytics } = require('../controller/adminController');

const adminRoute = express.Router();

adminRoute.post("/admin/add-product",adminAuth,add_product);
adminRoute.post("/admin/delete-product",adminAuth,delete_product);
adminRoute.post("/admin/change-order-status",adminAuth,change_order_status);

// GET
adminRoute.get("/admin/get-products",adminAuth,add_product);
adminRoute.get("/admin/get-orders",adminAuth,get_orders);
adminRoute.get("/admin/analytics",adminAuth,analytics);

module.exports = adminRoute;