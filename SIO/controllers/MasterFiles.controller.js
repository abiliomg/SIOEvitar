var mongoose = require("mongoose");
var MasterFiles = require("../models/MasterFiles.model");
 

var MasterFilesController = {};
 
MasterFilesController.getAllMasterFiles = function (req, res, next) {
    MasterFiles.find(function (err, masterFiles) {
        if (err) {
            next(err);
        } else {
            res.json(masterFiles);
        }
    });
};
 
module.exports = MasterFilesController;