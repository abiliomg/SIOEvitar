var express = require ('express');
var router = express.Router();
var LineController = require("../controllers/Line.controller.js");


router.get('/', LineController.getAllLine);
router.get('/topProdutos/:year',LineController.getTopProdutosYear);
router.get('/quantidadeProdutoFirst/:year/:code',LineController.getQuantityFirst);
router.get('/quantidadeProdutoSecond/:year/:code',LineController.getQuantitySecond);
router.get('/quantidadeProdutoThird/:year/:code',LineController.getQuantityThird);
router.get('/quantidadeProdutoForth/:year/:code',LineController.getQuantityForth);
module.exports = router;