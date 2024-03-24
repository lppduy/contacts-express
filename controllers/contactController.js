//@desc Get all contacts
//@route GET /api/contacts
//@access Public
exports.getContacts = (req, res, next) => {
  res.status(200).json({ message: 'Get all contacts' });
};

//@desc Create a contact
//@route POST /api/contacts
//@access Public
exports.createContact = (req, res, next) => {
  res.status(200).json({ message: 'Create a contact' });
};

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access Public
exports.updateContact = (req, res, next) => {
  res.status(200).json({ message: `Update contact with id of ${req.params.id}` });
};

//@desc Get a contact
//@route GET /api/contacts/:id
//@access Public
exports.getContact = (req, res, next) => {
  res.status(200).json({ message: `Get contact with id of ${req.params.id}` });
};

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access Public
exports.deleteContact = (req, res, next) => {
  res.status(200).json({ message: `Delete contact with id of ${req.params.id}` });
};

