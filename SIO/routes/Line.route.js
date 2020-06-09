var express = require ('express');
var router = express.Router();
var LineController = require("../controllers/Line.controller.js");


router.get('/', LineController.getAllLine);
router.get('/topProdutos/:year',LineController.getTopProdutosYear);
router.get('/topProdutosV/:year',LineController.getTopProdutosVYear);
router.get('/quantidadeProdutoFirst/:year/:code',LineController.getQuantityFirst);
router.get('/quantidadeProdutoSecond/:year/:code',LineController.getQuantitySecond);
router.get('/quantidadeProdutoThird/:year/:code',LineController.getQuantityThird);
router.get('/quantidadeProdutoForth/:year/:code',LineController.getQuantityForth);
router.get('/moneyFirst/:year/:code',LineController.getMoneyFirst);
router.get('/moneySecond/:year/:code',LineController.getMoneySecond);
router.get('/moneyThird/:year/:code',LineController.getMoneyThird);
router.get('/moneyForth/:year/:code',LineController.getMoneyForth);
router.get('/queryDoAbilio/:year',LineController.queryDoAbilio);
router.get('/vendasMes/:year',LineController.getVendasMes);

router.get('/vendasFirst/:year',LineController.getVendasFirst);
router.get('/vendasSecond/:year',LineController.getVendasSecond);
router.get('/vendasThird/:year',LineController.getVendasThird);
router.get('/vendasForth/:year',LineController.getVendasForth);
router.get('/vendasFirstQ/:year',LineController.getVendasFirstQ);
router.get('/vendasSecondQ/:year',LineController.getVendasSecondQ);
router.get('/vendasThirdQ/:year',LineController.getVendasThirdQ);
router.get('/vendasForthQ/:year',LineController.getVendasForthQ);
module.exports = router;