const express = require('express')
const router = express.Router();
const serviceController = require('../app/controllers/serviceController')

router.get('/getAllServices', serviceController.gettAllServices);
router.get('/getServicePrice', serviceController.getAllServicePrice);
router.post('/createWeightRange', serviceController.createWeightRange);
router.post('/createService', serviceController.createService);
router.post('/createServicePrice', serviceController.createServicePrice);
router.delete('/deleteService', serviceController.deleteService);
router.delete('/deleteServicePrice', serviceController.deleteServicePrice);
router.delete('/deleteWeightRange', serviceController.deleteWeightRange);
router.post('/updateService', serviceController.editService);
router.post('/updateServicePrice', serviceController.editServicePrice);
router.post('/updateWeightRange', serviceController.editWeightRange);

module.exports = router;