const expres = require('express');
const router = expres.Router();
const { registerUser, loginUser, getCurrentUser } = require('../controllers/userController');
const { validateToken } = require('../middlewares/validateTokenHandler');

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/current', validateToken, getCurrentUser);

module.exports = router;
