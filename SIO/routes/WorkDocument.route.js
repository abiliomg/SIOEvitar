var express = require ('express');
var router = express.Router();
var WorkDocumentController = require("../controllers/WorkDocument.controller.js");

router.get('/', WorkDocumentController.getAllWorkDocument);

module.exports = router;