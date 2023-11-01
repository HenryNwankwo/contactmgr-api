const asyncHandler = require('express-async-handler');

/* Get all contacts
@route GET /api/contacts
@access public */

const getAllContacts = asyncHandler(async (req, res) => {
  res.status(200).send('Getting all contacts');
});

/* Get contact by ID
@route GET /api/contacts/:id
@access public */

const getContactById = asyncHandler(async (req, res) => {
  res.status(200).send(`Getting contact for ${req.params.id}`);
});

/* create new contact
@route POST /api/contacts
@access public */

const createContact = asyncHandler(async (req, res) => {
  const { name, phone, email } = req.body;

  if (!name || !phone || !email) {
    res.status(400);
    throw new Error('All fields are required! ');
  }
});

/* Update contact
@route PUT /api/contacts/:id
@access public */

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).send(`Updating contact for ${req.params.id}`);
});

/* Delete contact
@route DELETE /api/contacts/:id
@access public */

const deleteContact = asyncHandler(async (req, res) => {
  res.send(`Delete contact for ${req.params.id}`);
});

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
