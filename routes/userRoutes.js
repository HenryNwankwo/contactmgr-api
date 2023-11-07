const router = require('express').Router();
const validateToken = require('../middlewares/validateTokenHandler');
const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require('./../controllers/userController');

/**=========================
 * For Registering a User
 * =======================**/

/**
 * @openapi
 * /api/vi/users/register:
 *  post:
 *    summary: For user registration. Returns the object of the user created
 *    tags:
 *      - Users
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#components/schemas/RegisterUser'
 *    responses:
 *      201:
 *        description: Successful user creation.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schemas/RegisterUserResponse'
 *      400:
 *       description: Bad Request
 *      409:
 *       description: Request Conflict
 *      500:
 *       description: Server Error
 */

router.post('/register', registerUser);

/**=========================
 * For Registering a User
 * =======================**/

/**
 * @openapi
 * /api/vi/users/login:
 *  post:
 *    summary: For user login. Returns an object containing the access token
 *    tags:
 *      - Users
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#components/schemas/LoginUser'
 *    responses:
 *      200:
 *        description: Successful user login.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schemas/LoginUserResponse'
 *      400:
 *       description: Validation Failed
 *      500:
 *       description: Server Error
 */

router.post('/login', loginUser);

//For getting current user
router.get('/current', validateToken, getCurrentUser);

module.exports = router;
