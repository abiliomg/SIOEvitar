var express = require ('express');
var router = express.Router();
var CompanyAddressController = require("../controllers/CompanyAddress.controller.js");
 
router.get('/', CompanyAddressController.getAllCompanyAddress);
 
module.exports = router;