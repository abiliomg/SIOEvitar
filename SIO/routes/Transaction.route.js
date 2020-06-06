var express = require ('express');
var router = express.Router();
var TransactionController = require("../controllers/Transaction.controller.js");

router.get('/', TransactionController.getAllTransaction);
router.get('/comprasMes/:year',TransactionController.getComprasPorMes);
router.get('/mediaComprasMes/:year',TransactionController.getMediaComprasPorMes);
router.get('/comprasAno',TransactionController.getComprasAno);
module.exports = router;