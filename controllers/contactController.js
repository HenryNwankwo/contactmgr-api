const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

/* Get all contacts
@route GET /api/contacts
@access private */

const getAllContacts = asyncHandler(async (req, res) => {
  const allContacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(allContacts);
});

/* Get contact by ID
@route GET /api/contacts/:id
@access private */

const getContactById = asyncHandler(async (req, res) => {
  const contactId = req.params.id;
  const contactFound = await Contact.findById(contactId);

  if (!contactFound) {
    res.status(404);
    throw new Error('Contact not found');
  }
  res.status(200).json(contactFound);
});

/* create new contact
@route POST /api/contacts
@access private */

const createContact = asyncHandler(async (req, res) => {
  const { name, phone, email } = req.body;

  if (!name || !phone || !email) {
    res.status(400);
    throw new Error('All fields are required! ');
  }
  const newContact = await Contact.create({
    user_id: req.user.id,
    name,
    email,
    phone,
  });
  res.status(201).json({
    message: 'Contact added successfully!',
    new_contact: newContact,
  });
});

/* Update contact
@route PUT /api/contacts/:id
@access private */

const updateContact = asyncHandler(async (req, res) => {
  const contactId = req.params.id;
  const { name, email, phone } = req.body;

  if (contactId == '') {
    res.status(400);
    throw new Error('Invalid Contact Id!');
  }

  if (!name && !email && !phone) {
    res.status(400);
    throw new Error('At least, one field is required!');
  }

  //Checking if contact exists
  const contactFound = await Contact.findById(contactId);

  if (!contactFound) {
    res.status(404);
    throw new Error('Contact not found');
  }
  //Checking if user has permission to update
  if (contactFound.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(
      "User don't have permission to update other user's contact"
    );
  }

  //updating if it exists

  const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  res.status(200).json({
    message: 'Contact updated successfully!',
    updated_contact: updatedContact,
  });
});

/* Delete contact
@route DELETE /api/contacts/:id
@access private */

const deleteContact = asyncHandler(async (req, res) => {
  const userContact = await Contact.findById(req.params.id);

  if (!userContact) {
    res.status(404);

    throw new Error('Contact not found!');
  }

  //Checking if user have permission to delete
  if (userContact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(
      "User don't have permission to delete other user's contact"
    );
  }

  await Contact.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message: 'Contact deleted successfully!',
    deleted_contact: userContact,
  });
});

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
