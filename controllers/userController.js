const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//@desc Register a user
//@route POST /api/users/register
//@access Public
exports.registerUser = async (req, res, next) => {

  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    next(new Error('Please provide all fields'));
  }

  // Check if email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400)
    next(new Error('User already exists'));
  }

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    username,
    email,
    password: hashedPassword
  });

  if (!user) {
    res.status(400);
    next(new Error('Invalid user data'));
  }
  res.status(201).json({
    success: true,
    user: {
      _id: user._id,
      email: user.email
    }
  });
}

//@desc Login a user
//@route POST /api/users/login
//@access Public
exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    next(new Error('Please provide all fields'));
  }

  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    next(new Error('Email is not registered'));
  }
  //compare password with hashed password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(401);
    next(new Error('Email or password is incorrect'));
  }

  const accessToken = jwt.sign({
    user: {
      username: user.username,
      email: user.email,
      _id: user._id
    }
  }, process.env.JWT_SECRET, { expiresIn: '1d' });

  res.json({
    success: true,
    token: accessToken
  });
}

//@desc Get current user
//@route POST /api/users/current
//@access Private
exports.getCurrentUser = (req, res, next) => {
  res.json(req.user);
}