const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please add a username!'],
      unique: [true, 'Username already exist!'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email address'],
      unique: [true, 'Email address already exist!'],
    },
    password: {
      type: String,
      required: [true, 'Please add a password!'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
