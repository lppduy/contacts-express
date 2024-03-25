const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

exports.validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader && authHeader.startsWith('Bearer')) {
    token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error('Not authorized, token failed');
      }
      console.log('decoded', decoded)
      req.user = decoded;
      next();
    });
  }

  if (!token) {
    res.status(401);
    throw new Error('User is not authorized or token is missing');
  }
});
