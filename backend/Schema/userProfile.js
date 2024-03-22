const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    username: String,
    photo: String,
    updated_at: Date
});

module.exports = UserSchema;

