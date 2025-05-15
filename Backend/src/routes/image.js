const express = require('express')
const router = express.Router();
const imageController = require('../app/controllers/imageController')

router.get('/get', imageController.getAllImages);
router.post('/create', imageController.createImage);

module.exports = router;