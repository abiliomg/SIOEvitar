var express = require ('express');
var router = express.Router();
var WorkingDocumentsController = require("../controllers/WorkingDocuments.controller.js");

router.get('/', WorkingDocumentsController.getAllWorkingDocuments);

module.exports = router;