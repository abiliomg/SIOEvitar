var express = require ('express');
var router = express.Router();
var ShipFromController = require("../controllers/ShipFrom.controller.js");


router.get('/', ShipFromController.getAllShipFrom);

module.exports = router;