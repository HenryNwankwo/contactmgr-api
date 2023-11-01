/* Get all contacts
@route GET /api/contacts
@access public */

const getAllContacts = (req, res) => {
  res.status(200).send('Getting all contacts');
};

/* Get contact by ID
@route GET /api/contacts/:id
@access public */

const getContactById = (req, res) => {
  res.status(200).send(`Getting contact for ${req.params.id}`);
};

/* create new contact
@route POST /api/contacts
@access public */

const createContact = (req, res) => {
  const { name, phone, email } = req.body;

  if (!name || !phone || !email) {
    res.status(400);
    throw new Error('All fields are required! ');
  }
};

/* Update contact
@route PUT /api/contacts/:id
@access public */

const updateContact = (req, res) => {
  res.status(200).send(`Updating contact for ${req.params.id}`);
};

/* Delete contact
@route DELETE /api/contacts/:id
@access public */

const deleteContact = (req, res) => {
  res.send(`Delete contact for ${req.params.id}`);
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
