var mongoose = require("mongoose");
var Transaction = require("../models/Transaction.model.js");

var TransactionController={};

TransactionController.getAllTransaction = function (req, res, next) {
	Transaction.find(function (err, Transaction) {
		if (err) {
			next(err);
		} else {
			res.json(Transaction);
		}
	});
};

module.exports = TransactionController;