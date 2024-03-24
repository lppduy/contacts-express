const expres = require('express');
const router = expres.Router();
const { getContacts, createContact, updateContact, getContact, deleteContact } = require('../controllers/contactController');

router.get('/', getContacts);

router.post('/', createContact);

router.put('/:id', updateContact);

router.get('/:id', getContact);

router.delete('/:id', deleteContact);

module.exports = router;