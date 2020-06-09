var mongoose = require('mongoose');
var Invoice = require('../models/Invoice.model');

var InvoiceController = {};

InvoiceController.getAllInvoice = async function (req, res, next) {
	const all = function () {
		return Invoice.find();
	};
	let retorna = await all();
	res.json(retorna);
};

InvoiceController.topClientesAno = async function (req, res, next) {
	let year = req.params.year;
	Invoice.aggregate([{$match: {
        FiscalYear:{$eq:parseInt(year)}
      }}, {$group: {
        _id: "$CustomerID",
        TotalDinheiro: {
          $sum: "$DocumentTotals.NetTotal"
        }
      }}, {$sort: {
        TotalDinheiro: -1
      }}, {$limit: 5},
    {$lookup:{
        from:'customers',
        localField:'_id',
        foreignField:'CustomerID',
        as:'CustomerInfo'
    }}
    ], function (err, result) {
		res.json(result);
	});
};
InvoiceController.getMediaVendasAno= function (req, res, next) {
    let year=req.params.year;
    Invoice.aggregate(
        [{$match: {
            FiscalYear:{$eq:parseInt(year)}
          }}, {$group: {
            _id: null,
            MediaDinheiro: {
              $avg: "$DocumentTotals.NetTotal"
            }
          }}, {$sort: {
            MediaDinheiro: -1
          }}]
        , function (err, result) {
		res.json(result);
	})
}

InvoiceController.getVendasFirst=function(req,res,next){
	var year=req.params.year;
	Invoice.aggregate(
		[{$match: {
			InvoiceDate:{
			  $gte:new Date(year+"-01-01T00:00:00.000Z"),
			  $lte:new Date(year+"-03-31T23:59:59.000Z")
			}
		  }}, {$group: {
			_id:null,
			Valor:{$sum:"$DocumentTotals.NetTotal"}
		  }}]
		  ,
		function (err, result) {
			res.json(result);
		}
	)
}
InvoiceController.getVendasSecond=function(req,res,next){
	var year=req.params.year;
	Invoice.aggregate(
		[{$match: {
			InvoiceDate:{
			  $gte:new Date(year+"-04-01T00:00:00.000Z"),
			  $lte:new Date(year+"-06-30T23:59:59.000Z")
			}
		  }}, {$group: {
			_id:null,
			Valor:{$sum:"$DocumentTotals.NetTotal"}
		  }}]
		  ,
		function (err, result) {
			res.json(result);
		}
	)
}
InvoiceController.getVendasThird=function(req,res,next){
	var year=req.params.year;
	Invoice.aggregate(
		[{$match: {
			InvoiceDate:{
			  $gte:new Date(year+"-07-01T00:00:00.000Z"),
			  $lte:new Date(year+"-09-30T23:59:59.000Z")
			}
		  }}, {$group: {
			_id:null,
			Valor:{$sum:"$DocumentTotals.NetTotal"}
		  }}]
		  ,
		function (err, result) {
			res.json(result);
		}
	)
}
InvoiceController.getVendasForth=function(req,res,next){
	var year=req.params.year;
	Invoice.aggregate(
		[{$match: {
			InvoiceDate:{
			  $gte:new Date(year+"-10-01T00:00:00.000Z"),
			  $lte:new Date(year+"-12-31T23:59:59.000Z")
			}
		  }}, {$group: {
			_id:null,
			Valor:{$sum:"$DocumentTotals.NetTotal"}
		  }}]
		  ,
		function (err, result) {
			res.json(result);
		}
	)
}
module.exports = InvoiceController;
