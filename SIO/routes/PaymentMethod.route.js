var express = require ('express');
var router = express.Router();
var PaymentMethodController = require("../controllers/PaymentMethod.controller.js");


router.get('/', PaymentMethodController.getAllPaymentMethod);

module.exports = router;