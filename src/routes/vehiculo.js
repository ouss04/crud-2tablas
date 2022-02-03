const router = require('express').Router(); 

const vehiculoController = require('../controllers/vehiculoController');

// CRUD
//router.post('/add',        vehiculoController.save);    // C
router.post('/vehiculo/add', vehiculoController.save);    // C

//router.get ('/',           vehiculoController.list);    // R 
router.get ('/vehiculo',     vehiculoController.list);    // R 

//router.get ('/update/:bastidor', vehiculoController.edit);    // U
router.get ('/vehiculo/update/:bastidor', vehiculoController.edit);    // U
//router.post('/update/:bastidor', vehiculoController.update);  // U
router.post('/vehiculo/update/:bastidor', vehiculoController.update);  // U

//router.get ('/delete/:bastidor', vehiculoController.delete);  // D
router.get ('/vehiculo/delete/:bastidor', vehiculoController.delete);  // D

module.exports = router;
