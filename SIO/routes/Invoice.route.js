var express = require ('express');
var router = express.Router();
var InvoiceController = require("../controllers/Invoice.controller.js");


router.get('/', InvoiceController.getAllInvoice);
router.get('/topClientesAno/:year',InvoiceController.topClientesAno)
router.get('/mediaVendasAno/:year',InvoiceController.getMediaVendasAno)




module.exports = router;