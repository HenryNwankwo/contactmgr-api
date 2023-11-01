const router = require('express').Router();

//For getting all contacts
router.route('/').get((req, res) => {
  res.send('Getting all contacts');
});

//For getting a contact
router.route('/:id').get((req, res) => {
  res.send(`Getting contact for ${req.params.id}`);
});

//For creating contact
router.route('/').post((req, res) => {
  res.send('Creating a contact');
});

//For updating contact
router.route('/:id').put((req, res) => {
  res.send(`Updating contact for ${req.params.id}`);
});

//For deleting contact
router.route('/:id').delete((req, res) => {
  res.send(`Delete contact for ${req.params.id}`);
});

module.exports = router;
