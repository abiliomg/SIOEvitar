var express = require ('express');
var router = express.Router();
var DocumentStatusController = require("../controllers/DocumentStatus.controller.js");
 
router.get('/', DocumentStatusController.getAllDocumentStatus);
 
module.exports = router;