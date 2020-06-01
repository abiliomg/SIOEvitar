var mongoose = require("mongoose");
var CreditLine = require("../models/CreditLine.model");
 
var CreditLineController = {};
 
CreditLineController.getAllCreditLine = function (req, res, next) {
    CreditLine.find(function (err, creditLine) {
        if (err) {
            next(err);
        } else {
            res.json(creditLine);
        }
    });
};
 
module.exports = CreditLineController;