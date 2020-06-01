var mongoose = require("mongoose");
var ShipFrom = require("../models/ShipFrom.model");

var ShipFromController = {};


ShipFromController.getAllShipFrom = function (req, res, next) {
    ShipFrom.find(function (err, shipFroms) {
        if (err) {
            next(err);
        } else {
            res.json(shipFroms);
        }
    });
};

module.exports = ShipFromController;