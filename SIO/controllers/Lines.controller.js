var mongoose = require("mongoose");
var Lines = require("../models/Lines.model");
 

var LinesController = {};
 
LinesController.getAllLines = function (req, res, next) {
    Lines.find(function (err, lines) {
        if (err) {
            next(err);
        } else {
            res.json(lines);
        }
    });
};
 
module.exports = LinesController;