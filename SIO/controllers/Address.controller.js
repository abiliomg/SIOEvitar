var mongoose = require("mongoose");
var Address= require("../models/Address.model");
 
var AddressController = {};
 
AddressController.getAllAddress = function (req, res, next) {
    Address.find(function (err, address) {
        if (err) {
            next(err);
        } else {
            res.json(address);
        }
    });
};
 
module.exports = AddressController;