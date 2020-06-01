var mongoose = require("mongoose");
var Currency = require("../models/Currency.model");
 
var CurrencyController = {};
 
CurrencyController.getAllCurrency = function (req, res, next) {
    Currency.find(function (err, currency) {
        if (err) {
            next(err);
        } else {
            res.json(currency);
        }
    });
};
 
module.exports = CurrencyController;