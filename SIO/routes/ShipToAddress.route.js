var express = require ('express');
var router = express.Router();
var ShipToAddressController = require("../controllers/ShipToAddress.controller.js");


router.get('/', ShipToAddressController.getAllShipToAddress);

module.exports = router;