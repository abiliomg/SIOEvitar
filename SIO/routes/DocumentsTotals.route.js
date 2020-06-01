var express = require ('express');
var router = express.Router();
var DocumentsTotalsController = require("../controllers/DocumentsTotals.controller.js");
 
router.get('/', DocumentsTotalsController.getAllDocumentsTotals);
 
module.exports = router;