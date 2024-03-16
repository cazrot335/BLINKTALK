const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  uid: String, // Add this line
  username: String,
  photo: String
});

module.exports = UserSchema;
