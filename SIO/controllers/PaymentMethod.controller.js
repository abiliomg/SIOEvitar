var mongoose = require("mongoose");
var PaymentMethod = require("../models/PaymentMethod.model");

var PaymentMethodController = {};


PaymentMethodController.getAllPaymentMethod= function (req, res, next) {
    PaymentMethod.find(function (err, paymentMethods) {
        if (err) {
            next(err);
        } else {
            res.json(paymentMethods);
        }
    });
};

module.exports = PaymentMethodController;