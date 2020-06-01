var mongoose = require("mongoose");
var ShipTo = require("../models/ShipTo.model");

var ShipToController = {};


ShipToController.getAllShipTo = function (req, res, next) {
    ShipTo.find(function (err, shipTos) {
        if (err) {
            next(err);
        } else {
            res.json(shipTos);
        }
    });
};

module.exports = ShipToController;