var express = require ('express');
var router = express.Router();
var TaxTableController = require("../controllers/TaxTable.controller.js");

router.get('/', TaxTableController.getAllTaxTable);

module.exports = router;