const asyncHandler = require('express-async-handler');
const User = require('./../models/userModel');

/* =================================
@desc Register a user
@access public
@route POST /api/v1/users/register 
==================================*/

const registerUser = asyncHandler(async (req, res) => {
  res.status(201).json({ message: 'User registration successful!' });
});

/* =================================
@desc Login a user
@access public
@route POST /api/v1/users/login
==================================*/

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'User logged in successfully!' });
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
