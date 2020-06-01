var mongoose = require("mongoose");
var CustomsDetails = require("../models/CustomsDetails.model");
 
var CustomsDetailsController = {};
 
CustomsDetailsController.getAllCustomsDetails = function (req, res, next) {
    CustomsDetails.find(function (err, customsDetails) {
        if (err) {
            next(err);
        } else {
            res.json(customsDetails);
        }
    });
};
 
module.exports = CustomsDetailsController;