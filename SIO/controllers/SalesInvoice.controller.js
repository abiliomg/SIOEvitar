var mongoose = require("mongoose");
var SalesInvoice = require("../models/SalesInvoice.model");

var SalesInvoiceController = {};


SalesInvoiceController.getAllSalesInvoice = function (req, res, next) {
    SalesInvoice.find(function (err, salesInvoices) {
        if (err) {
            next(err);
        } else {
            res.json(salesInvoices);
        }
    });
};

SalesInvoiceController.getInvoiceCreditYear = function (req, res, next) {
    SalesInvoice.find(function (err, salesInvoices) {
        if (err) {
            next(err);
        } else {
            res.json(salesInvoices);
        }
    });
};




module.exports = SalesInvoiceController;