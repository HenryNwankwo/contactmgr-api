const mongoose = require('mongoose');

/**=========================
 * User Schemas
 * =======================**/

/**
 * @openapi
 * components:
 *  schemas:
 *    RegisterUser:
 *      type: object
 *      required:
 *        - username
 *        - email
 *        - password
 *      properties:
 *        username:
 *          type: string
 *          example: janiceOkoro24
 *        email:
 *          type: string
 *          example: okoroJanice@gmail.com
 *        password:
 *          type: string
 *          format: password
 *          example: mypassword1234
 *
 *    RegisterUserResponse:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *          example: User registration successful!
 *        user:
 *          type: object
 *          properties:
 *            _id:
 *              type: string
 *              example: 6549f68f42d3faebf3c01ec3
 *            username:
 *              type: string
 *              example: janiceOkoro24
 *            email:
 *              type: string
 *              example: okoroJanice@gmail.com
 */

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
