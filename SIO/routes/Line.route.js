var express = require ('express');
var router = express.Router();
var LineController = require("../controllers/Line.controller.js");


router.get('/', LineController.getAllLine);
router.get('/topProdutos/:year',LineController.getTopProdutosYear);
module.exports = router;