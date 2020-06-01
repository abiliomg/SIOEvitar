var mongoose = require("mongoose");
var BillingAddress = require("../models/BillingAddress.model");
 
var BillingAddressController = {};
 
BillingAddressController.getAllBillingAddress = function (req, res, next) {
    BillingAddress.find(function (err,billingAddress) {
        if (err) {
            next(err);
        } else {
            res.json(billingAddress);
        }
    });
};
 
module.exports = BillingAddressController;