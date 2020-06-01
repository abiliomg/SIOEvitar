var mongoose = require("mongoose");
var CompanyAddress = require("../models/CompanyAddress.model");
 
var CompanyAddressController = {};
 
CompanyAddressController.getAllCompanyAddress = function (req, res, next) {
    CompanyAddress.find(function (err, companyAddress) {
        if (err) {
            next(err);
        } else {
            res.json(companyAddress);
        }
    });
};
 
module.exports = CompanyAddressController;