var express = require ('express');
var router = express.Router();
var TransactionController = require("../controllers/Transaction.controller.js");

router.get('/', TransactionController.getAllTransaction);

module.exports = router;