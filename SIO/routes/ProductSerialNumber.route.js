var express = require ('express');
var router = express.Router();
var ProductSerialNumberController = require("../controllers/ProductSerialNumber.controller.js");


router.get('/', ProductSerialNumberController.getAllProductSerialNumber);

module.exports = router;