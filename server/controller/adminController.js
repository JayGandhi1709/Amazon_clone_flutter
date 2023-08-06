// Import From packages
const bcryptjs = require("bcryptjs");

// Import From Files
const { createToken, verifyToken } = require("../utils/createToken");

// Import Modles
// const Product = require("../models/product");
const {Product} = require("../models/product");

module.exports.add_product = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports.delete_product = async (req, res) => {
  try {
    const { id } = req.body;
    const products = await Product.deleteOne({ _id:id });
    res.json(products);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
