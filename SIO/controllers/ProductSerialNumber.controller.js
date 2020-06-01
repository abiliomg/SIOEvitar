var mongoose = require("mongoose");
var ProductSerialNumber = require("../models/ProductSerialNumber.model");

var ProductSerialNumberController = {};


ProductSerialNumberController.getAllProductSerialNumber = function (req, res, next) {
    ProductSerialNumber.find(function (err, productSerialNumbers) {
        if (err) {
            next(err);
        } else {
            res.json(productSerialNumbers);
        }
    });
};

module.exports = ProductSerialNumberController;