const asyncHandler = require('express-async-handler');
const User = require('./../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
/* =================================
@desc Register a user
@access public
@route POST /api/v1/users/register 
==================================*/

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error('All fields is required!');
  }
  //Checking if username or email is taken

  const usernameExist = await User.findOne({ username });
  const emailExist = await User.findOne({ email });

  if (usernameExist) {
    res.status(400);
    throw new Error('Username already exists!');
  }
  if (emailExist) {
    res.status(400);
    throw new Error('Email already exists!');
  }

  //Hashing the password
  const hashedPassword = await bcrypt.hash(password, 10);

  //Creating new user
  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  if (newUser) {
    res.status(201).json({
      message: 'User registration successful!',
      user: {
        _id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data, user registration failed!');
  }
});

/* =================================
@desc Login a user
@access public
@route POST /api/v1/users/login
==================================*/

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('All fields is required!');
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(401);
    throw new Error('Invalid login details!');
  }

  //comparing password
  const comparedPassword = await bcrypt.compare(password, user.password);

  if (user && comparedPassword) {
    const accessToken = await jwt.sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1m' }
    );
    res.status(200).json({ access_token: accessToken });
  } else {
    res.status(401);
    throw new Error('Invalid login details!');
  }
});

/* =================================
@desc Get current user
@access private
@route GET /api/v1/users/current
==================================*/

const getCurrentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Current user data' });
});

module.exports = { registerUser, loginUser, getCurrentUser };
