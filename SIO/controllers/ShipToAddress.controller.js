var mongoose = require("mongoose");
var ShipToAddress = require("../models/ShipToAddress.model");

var ShipToAddressController = {};


ShipToAddressController.getAllShipToAddress = function (req, res, next) {
    ShipToAddress.find(function (err, shipToAddressss) {
        if (err) {
            next(err);
        } else {
            res.json(shipToAddressss);
        }
    });
};

module.exports = ShipToAddressController;