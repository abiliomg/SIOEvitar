var express = require ('express');
var router = express.Router();
var LineController = require("../controllers/Line.controller.js");


router.get('/', LineController.getAllLine);
module.exports = router;