var mongoose = require("mongoose");
var Supplier = require("../models/Supplier.model.js");

var SupplierController={};

SupplierController.getAllSupplier = function (req, res, next) {
	Supplier.find(function (err, Supplier) {
		if (err) {
			next(err);
		} else {
			res.json(Supplier);
		}
	});
};

module.exports = SupplierController;