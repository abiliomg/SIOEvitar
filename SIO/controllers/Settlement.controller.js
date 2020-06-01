var mongoose = require("mongoose");
var Settlement = require("../models/Settlement.model");

var SettlementController = {};


SettlementController.getAllSettlement = function (req, res, next) {
    Settlement.find(function (err, settlements) {
        if (err) {
            next(err);
        } else {
            res.json(settlements);
        }
    });
};

module.exports = SettlementController;