const asyncHandler = require('express-async-handler');

/* =================================
@desc Register a user
@access public
@route POST /api/v1/users/register 
==================================*/

const registerUser = asyncHandler((req, res) => {
  res.status(201).json({ message: 'User registration successful!' });
});

/* =================================
@desc Login a user
@access public
@route POST /api/v1/users/login
==================================*/

const loginUser = asyncHandler((req, res) => {
  res.status(200).json({ message: 'User logged in successfully!' });
});

/* =================================
@desc Get current user
@access public
@route GET /api/v1/users/current
==================================*/

const getCurrentUser = asyncHandler((req, res) => {
  res.status(200).json({ message: 'Current user data' });
});

module.exports = { registerUser, loginUser, getCurrentUser };
