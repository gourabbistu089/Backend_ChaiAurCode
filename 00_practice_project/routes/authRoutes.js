const express = require('express');
const { signup, login, logout, getUser } = require('../controllers/authController');
const { protect } = require('../middlewares/auth');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);
router.get('/user', protect, getUser);

module.exports = router;
