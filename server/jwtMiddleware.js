const jwt = require('jsonwebtoken');

const secret = 'my-secret-key';

const jwtMiddleware = (req, res, next) => {
  // Get the JWT token from the request header
  const token = req.headers['authorization'];

  // Verify the JWT token
  const decodedToken = jwt.verify(token, secret);

  // Check if the user is logged in
  if (!decodedToken.userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // The user is authenticated
  next();
};

module.exports = jwtMiddleware;
