const expres = require('express');
const router = expres.Router();

router.get('/', (req, res) => {
  res.status(200).json('Get all contacts!');
});

router.post('/', (req, res) => {
  res.status(200).json('Create contact!');
});

router.put('/:id', (req, res) => {
  res.status(200).json(`Update contact with id of ${req.params.id}`);
});

router.get('/:id', (req, res) => {
  res.status(200).json(`Get contact with id of ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.status(200).json(`Delete contact with id of ${req.params.id}`);
});

module.exports = router;