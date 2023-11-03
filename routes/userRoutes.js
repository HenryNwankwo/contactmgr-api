const router = require('express').Router();

//For registering a user

router.post('/register', (req, res) => {
  res.status(201).json({ message: 'User registration successful!' });
});

//For user login
router.post('/login', (req, res) => {
  res.status(200).json({ message: 'User logged in successfully!' });
});

//For getting current user
router.get('/current', (req, res) => {
  res.status(200).json({ message: 'Current user data' });
});

module.exports = router;
