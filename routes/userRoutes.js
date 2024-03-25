const expres = require('express');
const router = expres.Router();
const { registerUser, loginUser, getCurrentUser } = require('../controllers/userController');

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/current', getCurrentUser);

module.exports = router;
