// models/User.js
const mongoose = require('mongoose');

// Define schema for User
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create and export User model
module.exports = mongoose.model('User', UserSchema);
