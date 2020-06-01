var express = require ('express');
var router = express.Router();
var BillingAddressController = require("../controllers/BillingAddress.controller.js");
 
router.get('/', BillingAddressController.getAllBillingAddress);
 
module.exports = router;