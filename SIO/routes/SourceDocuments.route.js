var express = require ('express');
var router = express.Router();
var SourceDocumentsController = require("../controllers/SourceDocuments.controller.js");

router.get('/', SourceDocumentsController.getAllSourceDocuments);

module.exports = router;