var mongoose = require("mongoose");
var ShipFromAddress = require("../models/ShipFromAddress.model");

var ShipFromAddressController = {};


ShipFromAddressController.getAllShipFromAddress = function (req, res, next) {
    ShipFromAddress.find(function (err, shipFromAddresses) {
        if (err) {
            next(err);
        } else {
            res.json(shipFromAddresses);
        }
    });
};

module.exports = ShipFromAddressController;