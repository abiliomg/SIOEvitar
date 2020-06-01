var mongoose = require("mongoose");
var StockMovement = require("../models/StockMovement.model.js");

var StockMovementController={};

StockMovementController.getAllStockMovement = function (req, res, next) {
	StockMovement.find(function (err, StockMovement) {
		if (err) {
			next(err);
		} else {
			res.json(StockMovement);
		}
	});
};

module.exports = StockMovementController;