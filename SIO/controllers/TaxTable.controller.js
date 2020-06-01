var mongoose = require("mongoose");
var TaxTable = require("../models/TaxTable.model.js");

var TaxTableController={};

TaxTableController.getAllTaxTable = function (req, res, next) {
	TaxTable.find(function (err, TaxTable) {
		if (err) {
			next(err);
		} else {
			res.json(TaxTable);
		}
	});
};

module.exports = TaxTableController;