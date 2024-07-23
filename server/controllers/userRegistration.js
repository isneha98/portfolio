// controllers/UserController.js
const bcrypt = require('bcrypt');
const User = require('../models/userRegister'); // Assuming you have the User model defined

const UserController = {
  async registerUser(req, res) {
    try {
      const { username, password, email, confirmPassword } = req.body;

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
     
      // Create a new user
      const user = new User({
        username,
        password: hashedPassword,
        email,
        confirmPassword,
        
      });
        
      // Save the user to the database
      await user.save();

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      // console.error(error);
      res.status(500).json({ error: 'An error occurred while registering' });
    }
  },
};

module.exports = UserController;
