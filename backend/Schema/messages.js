const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    sender: String, // email of the sender
    receiver: String, // email of the receiver
    message: String,
    timestamp: Date
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;