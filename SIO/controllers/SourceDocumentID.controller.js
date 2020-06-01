var mongoose = require("mongoose");
var SourceDocumentID = require("../models/SourceDocumentID.model.js");

var SourceDocumentIDController={};

SourceDocumentIDController.getAllSourceDocumentID = function (req, res, next) {
	SourceDocumentID.find(function (err, SourceDocumentID) {
		if (err) {
			next(err);
		} else {
			res.json(SourceDocumentID);
		}
	});
};

module.exports = SourceDocumentIDController;