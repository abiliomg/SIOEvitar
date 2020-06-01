var express = require ('express');
var router = express.Router();
var ShipToController = require("../controllers/ShipTo.controller.js");


router.get('/', ShipToController.getAllShipTo);

module.exports = router;