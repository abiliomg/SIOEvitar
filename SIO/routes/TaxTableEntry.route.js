var express = require ('express');
var router = express.Router();
var TaxTableEntryController = require("../controllers/TaxTableEntry.controller.js");

router.get('/', TaxTableEntryController.getAllTaxTableEntry);

module.exports = router;