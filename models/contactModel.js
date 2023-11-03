const mongoose = require('mongoose');

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add contact name!'],
    },

    email: {
      type: String,
      required: [true, 'Contact email is required!'],
    },

    phone: {
      type: String,
      required: [true, 'Please add contact phone number!'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Contact || mongoose.model('Contact', contactSchema);