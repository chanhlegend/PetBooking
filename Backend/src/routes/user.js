const express = require('express')
const router = express.Router();
const userController = require('../app/controllers/userController')

router.get('/account', userController.getAllUsers);
router.get('/account/:id', userController.getUser);
router.post('/account/register', userController.registerUser);
router.post('/account/verify', userController.verifyUser);
router.post('/account/login', userController.loginUser);

module.exports = router;