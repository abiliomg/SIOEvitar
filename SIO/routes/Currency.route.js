var express = require ('express');
var router = express.Router();
var CurrencyController = require("../controllers/Currency.controller.js");
 
router.get('/', CurrencyController.getAllCurrency);
 
module.exports = router;