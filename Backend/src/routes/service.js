const express = require('express')
const router = express.Router();
const serviceController = require('../app/controllers/serviceController')

router.get('/getAllServices', serviceController.gettAllServices);
router.get('/getServicePrice', serviceController.getAllServicePrice);
router.post('/createWeightRange', serviceController.createWeightRange);
router.post('/createService', serviceController.createService);
router.post('/createServicePrice', serviceController.createServicePrice);

module.exports = router;