var mongoose = require("mongoose");
var SourceDocuments = require("../models/SourceDocuments.model.js");

var SourceDocumentsController={};

SourceDocumentsController.getAllSourceDocuments = function (req, res, next) {
	getAllSourceDocuments.find(function (err, SourceDocuments) {
		if (err) {
			next(err);
		} else {
			res.json(SourceDocuments);
		}
	});
};

module.exports = SourceDocumentsController;