var mongoose = require("mongoose");
var WorkingDocuments = require("../models/WorkingDocuments.model.js");

var WorkingDocumentsController={};

WorkingDocumentsController.getAllWorkingDocuments = function (req, res, next) {
	WorkingDocuments.find(function (err, WorkingDocuments) {
		if (err) {
			next(err);
		} else {
			res.json(WorkingDocuments);
		}
	});
};

module.exports = WorkingDocumentsController;