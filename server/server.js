
const express = require('express');
const session = require('express-session');
const contactFormRoutes = require('./routes/contactFormRoutes');
const userRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoutes');
const getAdminListRoutes= require('./routes/getAdminListRoutes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwtMiddleware = require('./jwtMiddleware');
const crypto = require('crypto');
const PORT = process.env.PORT || 5000; 
const app = express();


// app.use(jwtMiddleware);
const cors = require('cors');
const generateSecretKey = (length = 32) => {
  return crypto.randomBytes(length).toString('hex');
};
// const secretKey = generateSecretKey();
// app.use(cors());
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin credentials: true //Allow credentials (cookies, sessions, etc).
}));
app.use(express.json());
app.use(session({
  secret: generateSecretKey(),
  resave: false, // Avoid unnecessary session updates
  saveUninitialized: false ,// Don't create sessions for idle users
  cookie: {
    secure: false, // if true only transmit cookie over https
    httpOnly: false, // if true prevent client side JS from reading the cookie 
    maxAge: 1000 * 60 * 10 // session max age in miliseconds
}
}));

mongoose.connect('mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  

app.use(bodyParser.json());


// Use contactFormRoutes for form submissions
app.use('/api', contactFormRoutes);
app.use('/api', userRoutes);
app.use('/api', loginRoutes);
app.use('/api', getAdminListRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



