const mongoose = require('mongoose');

/**
 * @openapi
 * components:
 *  schemas:
 *    GetAllContacts:
 *      type: array
 *      items:
 *        type: object
 *        properties:
 *          id:
 *            type: string
 *            example: 65451bae2bed43bfc1a3ca85
 *          user_id:
 *            type: string
 *            example: 6544f0b429c651473da29777
 *          name:
 *            type: string
 *            example: Henry Ubanese
 *          email:
 *            type: string
 *            example: Chinwuba@hotmail.com
 *          phone:
 *            type: string
 *            example: +2347080000000
 *          createdAt:
 *            type: string
 *            format: date-time
 *            example: 2023-11-03T16:11:26.819Z
 *          updatedAt:
 *            type: string
 *            format: date-time
 *            example: 2023-11-03T16:36:59.407Z
 *          __v:
 *            type: number
 *            format: int64
 *            example: 0
 */

const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
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
