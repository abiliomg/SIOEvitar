var mongoose = require("mongoose");
var Payment = require("../models/Payment.model");
 

var PaymentController = {};
 
PaymentController.getAllPayment = function (req, res, next) {
    Payment.find(function (err, payment) {
        if (err) {
            next(err);
        } else {
            res.json(payment);
        }
    });
};
 
module.exports = PaymentController;