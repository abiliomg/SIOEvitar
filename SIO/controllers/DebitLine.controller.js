var mongoose = require("mongoose");
var DebitLine = require("../models/DebitLine.model");
 
var DebitLineController = {};
 
DebitLineController.getAllDebitLine = function (req, res, next) {
    DebitLine.find(function (err, debitLine) {
        if (err) {
            next(err);
        } else {
            res.json(debitLine);
        }
    });
};
 
module.exports = DebitLineController;