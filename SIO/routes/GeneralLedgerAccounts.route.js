var express = require ('express');
var router = express.Router();
var GeneralLedgerAccountsController = require("../controllers/GeneralLedgerAccounts.controller.js");


router.get('/', GeneralLedgerAccountsController.getAllGeneralLedgerAccounts);
module.exports = router;