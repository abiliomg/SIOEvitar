var express = require ('express');
var router = express.Router();
var SalesInvoiceController = require("../controllers/SalesInvoice.controller.js");


router.get('/', SalesInvoiceController.getAllSalesInvoice);
router.get('/InvoiceCreditYear', SalesInvoiceController.getInvoiceCreditYear);

module.exports = router;