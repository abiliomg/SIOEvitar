var mongoose = require("mongoose");
var WithholdingTax = require("../models/WithholdingTax.model.js");

var WithholdingTaxController={};

WithholdingTaxController.getAllWithholdingTax = function (req, res, next) {
	WithholdingTax.find(function (err, WithholdingTax) {
		if (err) {
			next(err);
		} else {
			res.json(WithholdingTax);
		}
	});
};

module.exports = WithholdingTaxController;