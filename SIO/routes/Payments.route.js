var express = require ('express');
var router = express.Router();
var PaymentsController = require("../controllers/Payments.controller.js");


router.get('/', PaymentsController.getAllPayments);

module.exports = router;