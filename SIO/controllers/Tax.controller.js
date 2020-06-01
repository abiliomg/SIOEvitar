var mongoose = require("mongoose");
var Tax = require("../models/Tax.model.js");

var TaxController={};

TaxController.getAllTax = function (req, res, next) {
	Tax.find(function (err, Tax) {
		if (err) {
			next(err);
		} else {
			res.json(Tax);
		}
	});
};

module.exports = TaxController;