var express = require ('express');
var router = express.Router();
var HeaderController = require("../controllers/Header.controller.js");


router.get('/', HeaderController.getAllHeader);
module.exports = router;