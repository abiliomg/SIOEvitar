var mongoose = require("mongoose");
var DocumentsTotals = require("../models/DocumentsTotals.model");
 
var DocumentsTotalsController = {};
 
DocumentsTotalsController.getAllDocumentsTotals = function (req, res, next) {
    DocumentsTotals.find(function (err, documentsTotals) {
        if (err) {
            next(err);
        } else {
            res.json(documentsTotals);
        }
    });
};
 
module.exports =DocumentsTotalsController;