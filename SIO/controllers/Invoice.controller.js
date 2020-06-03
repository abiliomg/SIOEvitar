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
    }},
    {
        $unwind:{path:"$CustomerInfo"}
    },{$limit: 5}
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
module.exports = InvoiceController;
