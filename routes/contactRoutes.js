const expres = require('express');
const router = expres.Router();
const { getContacts, createContact, updateContact, getContact, deleteContact } = require('../controllers/contactController');

router.route('/').get(getContacts).post(createContact);

router.route('/:id').put(updateContact).get(getContact).delete(deleteContact);

module.exports = router;