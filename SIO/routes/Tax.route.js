var express = require ('express');
var router = express.Router();
var TaxController = require("../controllers/Tax.controller.js");

router.get('/', TaxController.getAllTax);

module.exports = router;