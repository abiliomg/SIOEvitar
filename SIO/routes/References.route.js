var express = require ('express');
var router = express.Router();
var ReferencesController = require("../controllers/References.controller.js");


router.get('/', ReferencesController.getAllReferences);

module.exports = router;