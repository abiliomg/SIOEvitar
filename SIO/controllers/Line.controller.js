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
						$eq: parseInt(year),
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

LineController.getQuantityFirst=function(req,res,next){
	var year=req.params.year;
	var code=req.params.code;
	Line.aggregate(
		[{$match: {
			ProductCode:code,
			TaxPointDate:{
			  $gte:new Date(year+"-01-01T00:00:00.000Z"),
			  $lte:new Date(year+"-03-31T23:59:59.000Z")
			},
			InvoiceId: {$exists:true}
		  }}, {$group: {
			_id:"$ProductCode",
			QuantidadeVendida:{$sum:"$Quantity"}
		  }}]
		  ,
		function (err, result) {
			res.json(result);
		}
	)
}
LineController.getMoneyFirst=function(req,res,next){
	var year=req.params.year;
	var code=req.params.code;
	Line.aggregate(
		[{$match: {
			ProductCode:code,
			TaxPointDate:{
			  $gte:new Date(year+"-01-01T00:00:00.000Z"),
			  $lte:new Date(year+"-03-31T23:59:59.000Z")
			},
			InvoiceId: {$exists:true}
		  }}, {$group: {
			_id:"$ProductCode",
			QuantidadeVendida:{$sum:"$CreditAmount"}
		  }}]
		  ,
		function (err, result) {
			res.json(result);
		}
	)
}

LineController.getQuantitySecond=function(req,res,next){
	var year=req.params.year;
	var code=req.params.code;
	Line.aggregate(
		[{$match: {
			ProductCode:code,
			TaxPointDate:{
			  $gte:new Date(year+"-04-01T00:00:00.000Z"),
			  $lte:new Date(year+"-06-30T23:59:59.000Z")
			},
			InvoiceId: {$exists:true}
		  }}, {$group: {
			_id:"$ProductCode",
			QuantidadeVendida:{$sum:"$Quantity"}
		  }}]
		  ,
		function (err, result) {
			res.json(result);
		}
	)
}
LineController.getMoneySecond=function(req,res,next){
	var year=req.params.year;
	var code=req.params.code;
	Line.aggregate(
		[{$match: {
			ProductCode:code,
			TaxPointDate:{
			  $gte:new Date(year+"-04-01T00:00:00.000Z"),
			  $lte:new Date(year+"-06-30T23:59:59.000Z")
			},
			InvoiceId: {$exists:true}
		  }}, {$group: {
			_id:"$ProductCode",
			QuantidadeVendida:{$sum:"$CreditAmount"}
		  }}]
		  ,
		function (err, result) {
			res.json(result);
		}
	)
}

LineController.getQuantityThird=function(req,res,next){
	var year=req.params.year;
	var code=req.params.code;
	Line.aggregate(
		[{$match: {
			ProductCode:code,
			TaxPointDate:{
			  $gte:new Date(year+"-07-01T00:00:00.000Z"),
			  $lte:new Date(year+"-09-30T23:59:59.000Z")
			},
			InvoiceId: {$exists:true}
		  }}, {$group: {
			_id:"$ProductCode",
			QuantidadeVendida:{$sum:"$Quantity"}
		  }}]
		  ,
		function (err, result) {
			res.json(result);
		}
	)
}
LineController.getMoneyThird=function(req,res,next){
	var year=req.params.year;
	var code=req.params.code;
	Line.aggregate(
		[{$match: {
			ProductCode:code,
			TaxPointDate:{
			  $gte:new Date(year+"-07-01T00:00:00.000Z"),
			  $lte:new Date(year+"-09-30T23:59:59.000Z")
			},
			InvoiceId: {$exists:true}
		  }}, {$group: {
			_id:"$ProductCode",
			QuantidadeVendida:{$sum:"$CreditAmount"}
		  }}]
		  ,
		function (err, result) {
			res.json(result);
		}
	)
}
LineController.getQuantityForth=function(req,res,next){
	var year=req.params.year;
	var code=req.params.code;
	Line.aggregate(
		[{$match: {
			ProductCode:code,
			TaxPointDate:{
			  $gte:new Date(year+"-10-01T00:00:00.000Z"),
			  $lte:new Date(year+"-12-31T23:59:59.000Z")
			},
			InvoiceId: {$exists:true}
		  }}, {$group: {
			_id:"$ProductCode",
			QuantidadeVendida:{$sum:"$Quantity"}
		  }}]
		  ,
		function (err, result) {
			res.json(result);
		}
	)
}
LineController.getMoneyForth=function(req,res,next){
	var year=req.params.year;
	var code=req.params.code;
	Line.aggregate(
		[{$match: {
			ProductCode:code,
			TaxPointDate:{
			  $gte:new Date(year+"-10-01T00:00:00.000Z"),
			  $lte:new Date(year+"-12-31T23:59:59.000Z")
			},
			InvoiceId: {$exists:true}
		  }}, {$group: {
			_id:"$ProductCode",
			QuantidadeVendida:{$sum:"$CreditAmount"}
		  }}]
		  ,
		function (err, result) {
			res.json(result);
		}
	)
}


module.exports = LineController;
