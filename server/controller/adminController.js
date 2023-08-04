// Import From packages
const bcryptjs = require("bcryptjs");

// Import From Files
const { createToken, verifyToken } = require("../utils/createToken");

// Import Modles
// const Product = require("../models/product");
const Product = require("../models/product");

module.exports.add_product = async (req, res) => {
  try {

    const products = await Product.find({});
    res.json(products);
    
  } catch (error) {
    res.status(500).json({ error: e.toString() });
  }
};
