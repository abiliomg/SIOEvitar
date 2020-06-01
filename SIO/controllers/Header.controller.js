var mongoose = require("mongoose");
var Header = require("../models/Header.model");
 

var HeaderController = {};
 
HeaderController.getAllHeader = function (req, res, next) {
    Header.find(function (err, header) {
        if (err) {
            next(err);
        } else {
            res.json(header);
        }
    });
};
 
module.exports = HeaderController;