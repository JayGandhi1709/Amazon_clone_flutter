// Import From packages
const bcryptjs = require("bcryptjs");

// Import From Files
const { createToken, verifyToken } = require("../utils/createToken");

// Import Modles
const { Product } = require("../models/product");
const User = require("../models/user");

module.exports.add_to_cart = async (req, res) => {
  try {
    const { id } = req.body;
    const product = await Product.findById(id);
    let user = await User.findById(req.user);

    if (user.cart.length == 0) {
      user.cart.push({ product, quantity: 1 });
    } else {
      let isProductFound = false;

      for (let i = 0; i < user.cart.length; i++) {
        if (user.cart[i].product._id.equals(id)) {
          isProductFound = true;
        }
      }

      if (isProductFound) {
        // producttt is a product that is found in already in cart
        let producttt = user.cart.find((productt) =>
          productt.product._id.equals(product._id)
        );
        producttt.quantity += 1;
      } else {
        user.cart.push({ product, quantity: 1 });
      }
    }
    user = await user.save();
    res.json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: e.message });
  }
};

module.exports.remove_from_cart = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    let user = await User.findById(req.user);

    for (let i = 0; i < user.cart.length; i++) {
      if (user.cart[i].product._id.equals(id)) {
        if (user.cart[i].quantity == 1) {
          user.cart.splice(1, 1);
        } else {
          user.cart[i].quantity -= 1;
        }
      }
    }

    user = await user.save();
    res.json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
