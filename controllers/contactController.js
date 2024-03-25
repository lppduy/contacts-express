const Contact = require('../models/contactModel');
const asyncHandler = require('express-async-handler');


//@desc Get all contacts
//@route GET /api/contacts
//@access Private
exports.getContacts = asyncHandler(async (req, res, next) => {
  console.log(">>>>>>>>>>>.", req.user._id)
  const contacts = await Contact.find({ user_id: req.user._id });
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



  console.log(">>>>>>>>>>>.", req.user._id)
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user._id
  });

  res.status(201).json(contact);
});


//@desc Update a contact
//@route PUT /api/contacts/:id
//@access private
exports.updateContact = (req, res, next) => {
  Contact.findById(req.params.id)
    .then(contact => {
      if (contact) {
        contact.name = req.body.name || contact.name;
        contact.email = req.body.email || contact.email;
        contact.phone = req.body.phone || contact.phone;

        contact.save().then(contact => {
          res.status(200).json(contact);
        }).catch(err => {
          res.status(400);
          next(new Error('Something went wrong'));
        })
      }
    }
    ).catch(err => {
      res.status(404);
      next(new Error('Contact Not Found'));
    })
};

//@desc Get a contact
//@route GET /api/contacts/:id
//@access private
exports.getContact = (req, res, next) => {
  Contact.findById(req.params.id)
    .then(contact => {
      res.status(200).json(contact);
    })
    .catch(err => {
      res.status(404);
      next(new Error('Contact Not Found'));
    });
}


//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access private
exports.deleteContact = (req, res, next) => {
  Contact.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: 'Contact removed' });
    })
    .catch(err => {
      res.status(404);
      next(new Error('Contact Not Found'));
    });
}


