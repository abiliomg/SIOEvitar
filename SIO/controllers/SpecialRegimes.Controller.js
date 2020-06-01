var mongoose = require("mongoose");
var SpecialRegimes = require("../models/SpecialRegimes.model.js");

var SpecialRegimesController={};

SpecialRegimesController.getAllSpecialRegimes = function (req, res, next) {
	SpecialRegimes.find(function (err, SpecialRegimes) {
		if (err) {
			next(err);
		} else {
			res.json(SpecialRegimes);
		}
	});
};

module.exports = SpecialRegimesController;