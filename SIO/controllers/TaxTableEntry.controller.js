var mongoose = require("mongoose");
var TaxTableEntry = require("../models/TaxTableEntry.model.js");

var TaxTableEntryController={};

TaxTableEntryController.getAllTaxTableEntry = function (req, res, next) {
	TaxTableEntry.find(function (err, TaxTableEntry) {
		if (err) {
			next(err);
		} else {
			res.json(TaxTableEntry);
		}
	});
};

module.exports = TaxTableEntryController;