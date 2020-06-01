var mongoose = require("mongoose");
var Journal = require("../models/Journal.model");
 

var JournalController = {};
 
JournalController.getAllJournal = function (req, res, next) {
    Journal.find(function (err, journal) {
        if (err) {
            next(err);
        } else {
            res.json(journal);
        }
    });
};
 
module.exports = JournalController;