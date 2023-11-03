const router = require('express').Router();
const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require('./../controllers/userController');

//For registering a user

router.post('/register', registerUser);

//For user login
router.post('/login', loginUser);

//For getting current user
router.get('/current', getCurrentUser);

module.exports = router;
