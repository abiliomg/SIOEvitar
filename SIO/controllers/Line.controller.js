var mongoose = require("mongoose");
var Line = require("../models/Line.model");
 

var LineController = {};
 
LineController.getAllLine = function (req, res, next) {
    Line.find(function (err, line) {
        if (err) {
            next(err);
        } else {
            res.json(line);
        }
    });
};
 
module.exports = LineController;