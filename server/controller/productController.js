// Import From packages
const bcryptjs = require("bcryptjs");

// Import From Files
const { createToken, verifyToken } = require("../utils/createToken");

// Import Modles
const Product = require("../models/product");

module.exports.products = async (req, res) => {
  const { category } = req.query;
  try {
    const products = await Product.find({ category });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: e.toString() });
  }
};
