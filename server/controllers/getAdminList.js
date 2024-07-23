const session = require('express-session');
const User = require('../models/userRegister');
const getAdminList = async (req, res) => {
  if (req.session.user) {
    // If the user is authenticated, retrieve admin details
    // You can fetch the admin details from the database based on the username or user ID
    const username = req.session.user.username;
    console.log(username);
    User.findOne({ username }, (err, user) => {
      if (err) {
        res.status(500).json({ message: 'Internal Server Error' });
      }
      if (user) {
        // Send the admin details as JSON response
        res.json({ adminDetails: user });
      } else {
        res.status(404).json({ message: 'Admin not found' });
      }
    });
  } else {
    // If the user is not authenticated, return an unauthorized error
    res.status(401).json({ message: 'Unauthorized' });
  }

  // if (!req.session.user) {
  //   return res.status(401).send('Unauthorized');
  // }
  // else{
  //   //get the admin list
  //   const users = await User.find();
  //   res.json(users);
 
  // }

};
module.exports = getAdminList;