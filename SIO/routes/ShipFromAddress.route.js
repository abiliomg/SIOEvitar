var express = require ('express');
var router = express.Router();
var ShipFromAddressController = require("../controllers/ShipFromAddress.controller.js");


router.get('/', ShipFromAddressController.getAllShipFromAddress);

module.exports = router;