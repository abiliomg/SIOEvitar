var mongoose = require("mongoose");
var Payments = require("../models/Payments.model");

var PaymentsController = {};


PaymentsController.getAllPayments = function (req, res, next) {
    Payments.find(function (err, payments) {
        if (err) {
            next(err);
        } else {
            res.json(payments);
        }
    });
};

module.exports = PaymentsController;