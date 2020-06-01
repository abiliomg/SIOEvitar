var mongoose = require("mongoose");
var DocumentStatus = require("../models/DocumentStatus.model");
 
var DocumentStatusController = {};
 
DocumentStatusController.getAllDocumentStatus = function (req, res, next) {
    DocumentStatus.find(function (err, documentStatus) {
        if (err) {
            next(err);
        } else {
            res.json(documentStatus);
        }
    });
};
 
module.exports = DocumentStatusController;