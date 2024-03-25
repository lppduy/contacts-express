const { getContacts, createContact, updateContact, getContact, deleteContact } = require('../controllers/contactController');
const { validateToken } = require('../middlewares/validateTokenHandler');
const express = require('express');
const router = express.Router();

router.use(validateToken);

/**
 * @swagger
 * api/contacts:
 *   get:
 *     summary: Retrieve a list of contacts
 *     responses:
 *       200:
 *         description: A list of contacts
 */
router.route('/').get(getContacts)

  /**
   * @swagger
   * api/contacts:
   *   post:
   *     summary: Create a new contact
   *     responses:
   *       201:
   *         description: The created contact
   */
  .post(createContact);

/**
 * @swagger
 * api/contacts/{id}:
 *   put:
 *     summary: Update a contact
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the contact to update
 *     responses:
 *       200:
 *         description: The updated contact
 */
router.route('/:id').put(updateContact)

  /**
   * @swagger
   * api/contacts/{id}:
   *   get:
   *     summary: Retrieve a contact
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: The id of the contact to retrieve
   *     responses:
   *       200:
   *         description: The retrieved contact
   */
  .get(getContact)

  /**
   * @swagger
   * api/contacts/{id}:
   *   delete:
   *     summary: Delete a contact
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: The id of the contact to delete
   *     responses:
   *       200:
   *         description: The deleted contact
   */
  .delete(deleteContact);

module.exports = router;