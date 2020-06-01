var express = require ('express');
var router = express.Router();
var DebitLineController = require("../controllers/DebitLine.controller.js");
 
router.get('/', DebitLineController.getAllDebitLine);
 
module.exports = router;