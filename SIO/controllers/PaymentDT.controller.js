var mongoose = require("mongoose");
var PaymentDT = require("../models/PaymentDT.model");

var PaymentDTController = {};


PaymentDTController.getAllPaymentDT = function (req, res, next) {
    PaymentDT.find(function (err, paymentDTs) {
        if (err) {
            next(err);
        } else {
            res.json(paymentDTs);
        }
    });
};

module.exports = PaymentDTController;