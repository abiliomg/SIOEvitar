var express = require ('express');
var router = express.Router();
var InvoiceController = require("../controllers/Invoice.controller.js");


router.get('/', InvoiceController.getAllInvoice);
module.exports = router;