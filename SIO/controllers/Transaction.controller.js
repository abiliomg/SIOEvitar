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

TransactionController.getComprasPorMes=function(req,res,next){
	var year=req.params.year;
	Transaction.aggregate(
		[{$match: {
			TransactionDate:
			{$gte:new Date(year+'-01-01T04:00:00Z'), 
			 $lte:new Date(year+'-12-31T04:00:00Z')
			},
			TransactionID:/00041/
		  
			}}, {$lookup: {
			from: 'creditlines',
			localField: 'Lines.CreditLine',
			foreignField: '_id',
			as: 'data'
		  }}, {$unwind: {
			path: "$data"
		  }}, {$group: {
			_id:{$month:"$TransactionDate"},
			TotalDinheiro:{
			  $sum:"$data.CreditAmount"
			}
		  }}, {$sort: {
			_id: 1
		  }}]
	,
	function (err, result) {
		res.json(result);
	}
	)
}

TransactionController.getMediaComprasPorMes=function(req,res,next){
	var year=req.params.year;
	Transaction.aggregate(
		[{$match: {
			TransactionDate:
			{$gte:new Date(year+'-01-01T04:00:00Z'), 
			 $lte:new Date(year+'-12-31T04:00:00Z')
			},
			TransactionID:/00041/
		  
			}}, {$lookup: {
			from: 'creditlines',
			localField: 'Lines.CreditLine',
			foreignField: '_id',
			as: 'data'
		  }}, {$unwind: {
			path: "$data"
		  }}, {$group: {
			_id:{$month:"$TransactionDate"},
			TotalDinheiro:{
			  $avg:"$data.CreditAmount"
			}
		  }}, {$sort: {
			_id: 1
		  }}]
	,
	function (err, result) {
		res.json(result);
	}
	)
}

module.exports = TransactionController;