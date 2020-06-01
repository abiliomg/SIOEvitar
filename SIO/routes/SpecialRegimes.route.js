var express = require ('express');
var router = express.Router();
var SpecialRegimesController = require("../controllers/SpecialRegimes.controller.js");

router.get('/', SpecialRegimesController.getAllSpecialRegimes);

module.exports = router;