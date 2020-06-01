var express = require ('express');
var router = express.Router();
var SourceDocumentIDController = require("../controllers/SourceDocumentID.controller.js");

router.get('/', SourceDocumentIDController.getAllSourceDocumentID);

module.exports = router;