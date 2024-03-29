
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const mongoose = require('mongoose');
const fs = require('fs');
const http = require('http');
const io = require('socket.io');

// Check if the uploads directory exists
if (!fs.existsSync('uploads')) {
  // If the directory does not exist, create it
  fs.mkdirSync('uploads');
}

mongoose.connect('mongodb+srv://cazrot335:parth990@cluster0.cvo20js.mongodb.net/BLINKTALK?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('MongoDB database connection established successfully');
});
const Message = require('./Schema/messages');

// Define a Mongoose schema for your data
const UserSchema = require('./Schema/userProfile');
const User = mongoose.model('User', UserSchema);

const app = express();

// Set up the server to use Socket.IO
const server = http.createServer(app);
const socketServer = io(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

socketServer.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('new_message', async (message) => {
    try {
      const newMessage = new Message({
        sender: message.sender,
        receiver: message.receiver,
        message: message.message,
        timestamp: new Date()
      });
      await newMessage.save();
  
      // Broadcast the new message to all connected clients
      socketServer.emit('new_message', newMessage);
    } catch (error) {
      console.error(error);
    }
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});
app.use(cors());
app.use(express.json());

// Set up Multer for file uploads
const storage = multer.diskStorage({
 destination: function (req, file, cb) {
    cb(null, 'uploads/');
 },
 filename: function (req, file, cb) {
    cb(null, file.originalname);
 },
});

const upload = multer({ storage: storage });

// Endpoint to fetch all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Endpoint to handle form submission
// Endpoint to handle form submission or user profile update
app.post('/updateUser', upload.single('photo'), async (req, res) => {
  try {
    // Convert the uploaded file to Base64
    const photoBase64 = req.file ? fs.readFileSync(req.file.path, 'base64') : null;

    // Check if a user document exists with the given email
    let user = await User.findOne({ email: req.body.email });

    if (!user) {
      // If the user doesn't exist, create a new document
      user = new User({
        email: req.body.email,
        username: req.body.username,
        photo: photoBase64,
        updated_at: new Date(),
      });
    } else {
      // If the user exists, update the document
      user.username = req.body.username;
      user.photo = photoBase64 || user.photo;
      user.updated_at = new Date();
    }

    // Save the user document
    await user.save();

    // Delete the file after it's converted to Base64 and saved to the database
    if (req.file) {
      fs.unlink(req.file.path, (err) => {
        if (err) {
          console.error('Error deleting file:', err);
        } else {
          console.log('File deleted successfully');
        }
      });
    }

    res.status(200).json({ message: 'Data saved successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/messages', async (req, res) => {
  try {
    const newMessage = new Message({
      sender: req.body.sender,
      receiver: req.body.receiver,
      message: req.body.message,
      timestamp: new Date()
    });
    await newMessage.save();
    res.status(200).json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});
 
 
 

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

