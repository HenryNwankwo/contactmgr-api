const router = require('express').Router();
const {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} = require('../controllers/contactController');
const validateToken = require('../middlewares/validateTokenHandler');

//Validating the routes as private
router.use(validateToken);

//For getting all contacts AND For creating contact
router.route('/').get(getAllContacts).post(createContact);

//For getting a contact
router.route('/:id').get(getContactById);

//For updating contact
router.route('/:id').put(updateContact);

//For deleting contact
router.route('/:id').delete(deleteContact);

module.exports = router;
