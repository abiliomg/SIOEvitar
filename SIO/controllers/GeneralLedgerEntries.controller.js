var mongoose = require("mongoose");
var GeneralLedgerEntries = require("../models/GeneralLedgerEntries.model");
 

var GeneralLedgerEntriesController = {};
 
GeneralLedgerEntriesController.getAllGeneralLedgerEntries = function (req, res, next) {
    GeneralLedgerEntries.find(function (err, generalLedgerEntries) {
        if (err) {
            next(err);
        } else {
            res.json(generalLedgerEntries);
        }
    });
};
 
module.exports = GeneralLedgerEntriesController;