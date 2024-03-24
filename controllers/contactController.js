const Contact = require('../models/contactModel');
//@desc Get all contacts
//@route GET /api/contacts
//@access private
exports.getContacts = (req, res, next) => {
  Contact.find()
    .then(contacts => {
      res.status(200).json(contacts);
    })
    .catch(err => {
      res.status(400);
      next(new Error('Something went wrong')); // error: email existed or something else -> handle later
    })
}

//@desc Create a contact
//@route POST /api/contacts
//@access private
exports.createContact = (req, res, next) => {

  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error('Please fill in all fields');
  }
  const newContact = new Contact({
    name,
    email,
    phone
  });

  newContact.save().then(contact => {
    res.status(201).json(contact);
  }).catch(err => {
    res.status(400);
    next(new Error('Something went wrong'));
  })
}


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


