const Contact = require('../models/contactModel');
const asyncHandler = require('express-async-handler');


//@desc Get all contacts
//@route GET /api/contacts
//@access Private
exports.getContacts = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const contacts = await Contact.find()
    .skip(skip)
    .limit(limit);

  res.status(200).json(contacts);
});

//@desc Create a contact
//@route POST /api/contacts
//@access private
exports.createContact = asyncHandler(async (req, res, next) => {

  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error('Please enter all fields');
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user._id
  });

  res.status(201).json(contact);
});


//@desc Get a contact
//@route GET /api/contacts/:id
//@access private
exports.getContact = asyncHandler(async (req, res, next) => {
  let contact;

  await Contact.findById(req.params.id)
    .then((foundContact) => {
      contact = foundContact;
    })
    .catch((err) => {
      res.status(404);
      throw new Error('Contact Not Found');
    });

  if (contact.user_id.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error('You are not authorized to view this contact');
  }
  res.status(200).json(contact);
});


//@desc Update a contact
//@route PUT /api/contacts/:id
//@access private
exports.updateContact = asyncHandler(async (req, res, next) => {

  let contact;

  await Contact.findById(req.params.id)
    .then((foundContact) => {
      contact = foundContact;
    })
    .catch((err) => {
      res.status(404);
      throw new Error('Contact Not Found');
    });

  if (contact.user_id.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error('You are not authorized to update this contact');
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json({
    message: 'Contact updated',
    updatedContact,
  });
});

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access private
exports.deleteContact = asyncHandler(async (req, res, next) => {
  let contact;

  await Contact.findById(req.params.id)
    .then((foundContact) => {
      contact = foundContact;
    })
    .catch((err) => {
      res.status(404);
      throw new Error('Contact Not Found');
    });

  if (contact.user_id.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error('You are not authorized to delete this contact');
  }

  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: 'Contact removed', contact });
});


