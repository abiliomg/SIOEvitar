var mongoose = require("mongoose");
var Customer = require("../models/Customer.model");
 
var CustomerController = {};
 
CustomerController.getAllCustomer = function (req, res, next) {
    Customer.find(function (err, customer) {
        if (err) {
            next(err);
        } else {
            res.json(customer);
        }
    });
};
 
module.exports = CustomerController;