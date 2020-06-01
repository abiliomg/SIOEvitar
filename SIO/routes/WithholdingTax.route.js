var express = require ('express');
var router = express.Router();
var WithholdingTaxController = require("../controllers/WithholdingTax.controller.js");

router.get('/', WithholdingTaxController.getAllWithholdingTax);

module.exports = router;