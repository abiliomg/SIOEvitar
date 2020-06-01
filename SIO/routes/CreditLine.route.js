var express = require ('express');
var router = express.Router();
var CreditLineController = require("../controllers/CreditLine.controller.js");
 
router.get('/', CreditLineController.getAllCreditLine);
 
module.exports = router;