var mongoose = require("mongoose");
var CustomsInformation = require("../models/CustomsInformation.model");
 
var CustomsInformationController = {};
 
CustomsInformationController.getAllCustomsInformation = function (req, res, next) {
    CustomsInformation.find(function (err, customsInformation) {
        if (err) {
            next(err);
        } else {
            res.json(customsInformation);
        }
    });
};
 
module.exports = CustomsInformationController;