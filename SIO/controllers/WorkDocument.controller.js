var mongoose = require("mongoose");
var WorkDocument = require("../models/WorkDocument.model.js");

var WorkDocumentController={};

WorkDocumentController.getAllWorkDocument = function (req, res, next) {
	WorkDocument.find(function (err, WorkDocument) {
		if (err) {
			next(err);
		} else {
			res.json(WorkDocument);
		}
	});
};

module.exports = WorkDocumentController;