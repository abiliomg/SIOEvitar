var express = require ('express');
var router = express.Router();
var MovementOfGoodsController = require("../controllers/MovementOfGoods.controller.js");


router.get('/', MovementOfGoodsController.getAllMovementOfGoods);
module.exports = router;