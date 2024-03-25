const expres = require('express');
const router = expres.Router();

const { registerUser, loginUser, getCurrentUser } = require('../controllers/userController');
const { validateToken } = require('../middlewares/validateTokenHandler');

/**
 * @swagger
 * api/users/register:
 *   post:
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: The registered user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
router.post('/register', registerUser);

/**
 * @swagger
 * api/users/login:
 *   post:
 *     summary: Login a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The logged in user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
router.post('/login', loginUser);

/**
 * @swagger
 * api/users/current:
 *   post:
 *     summary: Get the current user
 *     responses:
 *       200:
 *         description: The current user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
router.post('/current', validateToken, getCurrentUser);

module.exports = router;