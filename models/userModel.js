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
 *    LoginUser:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          example: okoroJanice@gmail.com
 *        password:
 *          type: string
 *          format: password
 *          example: mypassword1234
 *
 *    LoginUserResponse:
 *      type: object
 *      properties:
 *        access_token:
 *          type: string
 *          example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDRmMGI0MjljNjUxNDczZGEyOTc3NyIsInVzZXJuYW1lIjoiYnJvb2tlIiwiZW1haWwiOiJicm9va2VAeWFob28uY29tIiwiaWF0IjoxNjk5MzQ3MjE2LCJleHAiOjE2OTkzNDkwMTZ9.IXmiwOb1SllLTHwFMLJkS24L3nLpPcaSvN2G6QMzVc4
 *
 *    GetCurrentUserResponse:
 *      type: object
 *      required:
 *        - id
 *        - email
 *        - username
 *      properties:
 *            id:
 *              type: string
 *              example: 65451bae2bed43bfc1a3ca85
 *            email:
 *              type: string
 *              example: Chinwuba@hotmail.com
 *            username:
 *              type: string
 *              example: Chinwuba
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
