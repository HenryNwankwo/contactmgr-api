import { Schema, models, model } from 'mongoose';

const contactSchema = Schema(
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

module.exports = models.Contact || model('Contact', contactSchema);
