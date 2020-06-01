var express = require ('express');
var router = express.Router();
var GeneralLedgerEntriesController = require("../controllers/GeneralLedgerEntries.controller.js");


router.get('/', GeneralLedgerEntriesController.getAllGeneralLedgerEntries);
module.exports = router;