var mongoose = require("mongoose");
var LinePay = require("../models/LinePay.model");
 

var LinePayController = {};
 
LinePayController.getAllLinePay = function (req, res, next) {
    LinePay.find(function (err, linePay) {
        if (err) {
            next(err);
        } else {
            res.json(linePay);
        }
    });
};
 
module.exports = LinePayController;