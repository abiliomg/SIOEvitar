var express = require ('express');
var router = express.Router();
var CustomerController = require("../controllers/Customer.controller.js");
 
router.get('/',CustomerController.getAllCustomer);
 
module.exports = router;