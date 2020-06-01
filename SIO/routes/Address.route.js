var express = require ('express');
var router = express.Router();
var AddressController = require("../controllers/Address.controller.js");
 
router.get('/', AddressController.getAllAddress);
 
module.exports = router;