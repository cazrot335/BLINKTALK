const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
 provider: String,
 id: String,
 accessToken: Object
});

const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    username: String,
    photo: String,
    providers: [providerSchema],
    created_at: Date,
    updated_at: Date
   });
   

module.exports = UserSchema;

