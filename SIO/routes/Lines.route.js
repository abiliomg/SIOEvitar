var express = require ('express');
var router = express.Router();
var LinesController = require("../controllers/Lines.controller.js");


router.get('/', LinesController.getAllLines);
module.exports = router;