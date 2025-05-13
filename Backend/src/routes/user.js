const express = require('express')
const router = express.Router();
const userController = require('../app/controllers/userController')

router.get('/account', userController.getAllUsers);
router.get('/account/:id', userController.getUser);
router.post('/account/email', userController.getUserByEmail);
router.post('/account/register', userController.registerUser);
router.post('/account/verify', userController.verifyUser);
router.post('/account/login', userController.loginUser);
router.post('/account/change-password', userController.changePassword);

module.exports = router;