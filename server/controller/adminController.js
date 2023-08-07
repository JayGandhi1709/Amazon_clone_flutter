// Import From packages
const bcryptjs = require("bcryptjs");

// Import From Files
const { createToken, verifyToken } = require("../utils/createToken");

// Import Modles
// const Product = require("../models/product");
const { Product } = require("../models/product");
const Order = require("../models/order");

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
    const products = await Product.deleteOne({ _id: id });
    res.json(products);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports.get_orders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports.change_order_status = async (req, res) => {
  try {
    const { id, status } = req.body;
    let order = await Order.findById(id);
    order.status = status;
    order = await order.save();
    res.json(order);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports.analytics = async (req, res) => {
  try {
    const orders = await Order.find({});
    let totalEarnings = 0;

    for (let i = 0; i < orders.length; i++) {
      for (let j = 0; j < orders[i].products.length; j++) {
        totalEarnings +=
          orders[i].products[j].quantity * orders[i].products[j].product.price;
      }
    }
    let mobileEarnings = await fetchCategoryWishProduct('Mobiles');
    let essentialsEarnings = await fetchCategoryWishProduct('Essentials');
    let appliancesEarnings = await fetchCategoryWishProduct('Appliances');
    let booksEarnings = await fetchCategoryWishProduct('Books');
    let fashionEarnings = await fetchCategoryWishProduct('Fashion');

    let earning = {
      totalEarnings,
      mobileEarnings,
      essentialsEarnings,
      appliancesEarnings,
      booksEarnings,
      fashionEarnings,
    }

    res.json(earning);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

async function fetchCategoryWishProduct(category) {
  let earnings = 0;
  let categoryOrders = await Order.find({
    'products.product.category': category,
  });

  for (let i = 0; i < categoryOrders.length; i++) {
    for (let j = 0; j < categoryOrders[i].products.length; j++) {
      earnings +=
        categoryOrders[i].products[j].quantity * categoryOrders[i].products[j].product.price;
    }
  }
  return earnings;
}
