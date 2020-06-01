var express = require ('express');
var router = express.Router();
var LinePayController = require("../controllers/LinePay.controller.js");


router.get('/', LinePayController.getAllLinePay);
module.exports = router;