// Import From packages
const bcryptjs = require("bcryptjs");

// Import From Files
const { createToken, verifyToken } = require("../utils/createToken");

// Import Modles
const {Product} = require("../models/product");

module.exports.products = async (req, res) => {
  const { category } = req.query;
  try {
    const products = await Product.find({ category });
    res.json(products);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports.search_product = async (req, res) => {
  const { searchQuery } = req.params;
  try {
    const products = await Product.find({
      name: { $regex: searchQuery, $options: "i" },
    });
    res.json(products);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports.rate_product = async (req, res) => {
  const { id, rating } = req.body;
  try {
    let product = await Product.findById(id);

    for (let i = 0; i < product.ratings.length; i++) {
      if (product.ratings[i].userId == req.user) {
        product.ratings.splice(i, 1);
        break;
      }
    }

    const ratingSchema = {
      userId: req.user,
      rating,
    };

    product.ratings.push(ratingSchema);
    product = await product.save();
    res.json(product);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports.deal_of_day = async (req, res) => {
  try {
    let products = await Product.find({});

    // a -> Product 1
    // b -> Product 2
    products = products.sort((a, b) => {
      let aSum = 0;
      let bSum = 0;
      for (let i = 0; i < a.ratings.length; i++) {
        aSum += a.ratings[i];
      }

      for (let i = 0; i < b.ratings.length; i++) {
        bSum += b.ratings[i];
      }

      return aSum < bSum ? 1 : -1;
    });

    res.json(products[0]);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
