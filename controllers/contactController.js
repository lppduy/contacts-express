const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');
//@desc Get all contacts
//@route GET /api/contacts
//@access Public
exports.getContacts = asyncHandler(
  async (req, res, next) => {

    const contacts = await Contact.find();
    res.status(200).json(contacts);
  });

//@desc Create a contact
//@route POST /api/contacts
//@access Public
exports.createContact = asyncHandler(
  async (req, res, next) => {

    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      res.status(400);
      throw new Error('Please fill in all fields');
    }
    const contact = await Contact.create({
      name,
      email,
      phone
    });
    res.status(201).json(contact);
  }
);

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access Public
exports.updateContact = asyncHandler(
  async (req, res, next) => {
    res.status(200).json({ message: `Update contact with id of ${req.params.id}` });
  }
);

//@desc Get a contact
//@route GET /api/contacts/:id
//@access Public
exports.getContact = asyncHandler(
  async (req, res, next) => {
    Contact.findById(req.params.id)
      .then(contact => {
        res.status(200).json(contact);
      })
      .catch(err => {
        res.status(404);
        res.json({
          title: "Contact Not Found",
          message: err.message,
          stackTrace: err.stack
        });
      });
  }
);

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access Public
exports.deleteContact = asyncHandler(
  async (req, res, next) => {
    res.status(200).json({ message: `Delete contact with id of ${req.params.id}` });
  }
);

