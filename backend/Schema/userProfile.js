const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  photo: String
});

module.exports = UserSchema;
