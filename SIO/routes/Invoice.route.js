var express = require ('express');
var router = express.Router();
var InvoiceController = require("../controllers/Invoice.controller.js");


router.get('/', InvoiceController.getAllInvoice);
router.get('/topClientesAno/:year',InvoiceController.topClientesAno)
router.get('/mediaVendasAno/:year',InvoiceController.getMediaVendasAno)


router.get('/vendasFirst/:year',InvoiceController.getVendasFirst);
router.get('/vendasSecond/:year',InvoiceController.getVendasSecond);
router.get('/vendasThird/:year',InvoiceController.getVendasThird);
router.get('/vendasForth/:year',InvoiceController.getVendasForth);

module.exports = router;