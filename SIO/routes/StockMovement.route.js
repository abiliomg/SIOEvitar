var express = require ('express');
var router = express.Router();
var StockMovementController = require("../controllers/StockMovement.controller.js");

router.get('/', StockMovementController.getAllStockMovement);

module.exports = router;