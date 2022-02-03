const router = require('express').Router(); 

const customerController = require('../controllers/customerController');

// CRUD
//router.post('/add',        customerController.save);    // C
router.post('/customer/add', customerController.save);    // C

//router.get ('/',           customerController.list);    // R 
router.get ('/customer',     customerController.list);    // R 

//router.get ('/update/:id', customerController.edit);    // U
router.get ('/customer/update/:id', customerController.edit);    // U
//router.post('/update/:id', customerController.update);  // U
router.post('/customer/update/:id', customerController.update);  // U

//router.get ('/delete/:id', customerController.delete);  // D
router.get ('/customer/delete/:id', customerController.delete);  // D

module.exports = router;
