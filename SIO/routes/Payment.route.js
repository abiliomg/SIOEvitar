var express = require ('express');
var router = express.Router();
var PaymentController = require("../controllers/Payment.controller.js");


router.get('/', PaymentController.getAllPayment);
module.exports = router;