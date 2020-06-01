var express = require ('express');
var router = express.Router();
var PaymentDTController = require("../controllers/PaymentDT.controller.js");


router.get('/', PaymentDTController.getAllPaymentDT);

module.exports = router;