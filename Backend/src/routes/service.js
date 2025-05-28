const express = require('express')
const router = express.Router();
const serviceController = require('../app/controllers/serviceController')

router.get('/get', serviceController.getAllServices);
router.post('/create', serviceController.createService);
router.get('/get/:id', serviceController.getServiceById);
router.post('/update/:id', serviceController.updateService);
router.delete('/delete/:id', serviceController.deleteService);
router.get('/getByUserId/:userId', serviceController.getServiceByUserId);

module.exports = router;