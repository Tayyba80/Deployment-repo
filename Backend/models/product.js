// models/Product.js
const mongoose = require('mongoose');

// Define schema for Product
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
});

// Create and export Product model
module.exports = mongoose.model('Product', ProductSchema);
