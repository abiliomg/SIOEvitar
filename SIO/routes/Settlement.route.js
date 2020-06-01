var express = require ('express');
var router = express.Router();
var SettlementController = require("../controllers/Settlement.controller.js");


router.get('/', SettlementController.getAllSettlement);

module.exports = router;