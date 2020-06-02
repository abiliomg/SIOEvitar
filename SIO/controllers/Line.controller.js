var mongoose = require('mongoose');
var Line = require('../models/Line.model');

var LineController = {};

LineController.getAllLine = function (req, res, next) {
	Line.find(function (err, line) {
		if (err) {
			next(err);
		} else {
			res.json(line);
		}
	});
};

LineController.getTopProdutosYear = function (req, res, next) {
	var year = req.params.year;
	Line.aggregate(
		[
			{
				$match: {
					FiscalYear: {
						$eq: 2020,
					},
					InvoiceId: {
						$exists: true,
					},
				},
			},
			{
				$group: {
					_id: '$ProductCode',
                    Description: { $first: '$ProductDescription' },
					Quantity: {
						$sum: '$Quantity',
					},
					CreditAmount: {
						$sum: '$CreditAmount',
					},
				},
			},
			{
				$sort: {
					Quantity: -1,
				},
			},
			{
				$limit: 5,
			},
		],
		function (err, result) {
			res.json(result);
		}
	);
};
module.exports = LineController;
