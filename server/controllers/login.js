const express = require('express');
const session = require('express-session');
const User = require('../models/userRegister');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const router = express.Router();

const LoginController = {
  async login(req, res) {
    // const generateSecretKey = (length = 32) => {
    //   return crypto.randomBytes(length).toString('hex');
    // };
    // const secret = generateSecretKey();
    const { username, password } = req.body;
 
    // Check the database to see if the user exists and if their password is correct
    const isUserExist = await User.findOne({ username });
    const hashedPassword = await bcrypt.hash(password, 10);
    
    if (!isUserExist.username) {
      return res.status(401).send("Invalid Username");

    }
   
    if (!bcrypt.compareSync(password, isUserExist.password)) {
      return res.status(401).send("Password Not Mtached");
    }
    if(isUserExist){
     
      const loggedInUser = {
        id: isUserExist.id,
        name: isUserExist.username,
        email: isUserExist.email,
        status: isUserExist.status
      
      };
       req.session.user = loggedInUser;
      
       res.status(200).json('Logged in successfully');
      // res.json(loggedInUser);
  
    } else {
      res.status(401).send('Authentication failed');
    }
    
    // Create a JWT token and send it back to the client
    // const token = jwt.sign({ userId: user.id }, secret, { expiresIn: "1h" });
     
    // Set the session
    // req.session.user = user;
    // console.log(user);
    // res.json({ token });
    
    // Redirect the user to the home page
    // res.redirect('/');
  }
};
module.exports = LoginController;
