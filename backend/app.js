
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const mongoose = require('mongoose');
const fs = require('fs');

// Check if the uploads directory exists
if (!fs.existsSync('uploads')) {
  // If the directory does not exist, create it
  fs.mkdirSync('uploads');
}


mongoose.connect('mongodb+srv://cazrot335:P%40rth990@cluster0.cvo20js.mongodb.net/BLINKTALK?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('MongoDB database connection established successfully');
});


// Define a Mongoose schema for your data
const UserSchema = require('./Schema/userProfile');
const User = mongoose.model('User', UserSchema);

const app = express();
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

// Endpoint to handle form submission
app.post('/updateUser', upload.single('photo'), async (req, res) => {
   try {
      const newUser = new User({
        username: req.body.username,
        photo: req.file.path, // Assuming you want to store the file path
      });
  
      await newUser.save();
  
      // Delete the file after it's saved to the database
      fs.unlink(req.file.path, (err) => {
        if (err) {
          console.error('Error deleting file:', err);
        } else {
          console.log('File deleted successfully');
        }
      });
  
      res.status(200).json({ message: 'Data saved successfully' });
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
   }
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

