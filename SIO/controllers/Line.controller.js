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
					FiscalYear: { $eq: parseInt(year) },
					$or: [
						{
							InvoiceId: { $exists: true },
						},
						{
							$and: [
								{
									StockMovementId: {
										$exists: true,
									},
								},
								{
									MovementType: { $eq: 'NC' },
								},
							],
						},
					],
				},
			},
			{
				$group: {
					_id: {Product:'$ProductCode',ProductDescription:'$ProductDescription'},
					soma: {
						$sum: {
							$cond: [
								{
									$ifNull: ['$InvoiceId', false],
								},
								'$Quantity',
								0,
							],
						},
					},
					sub: {
						$sum: {
							$cond: [
								{
									$ifNull: ['$StockMovementId', false],
								},
								'$Quantity',
								0,
							],
						},
					},
				},
			},
			{
				$addFields: {
					Quantity: {
						$subtract: ['$soma', '$sub'],
					},
				},
			},
			{
				$sort: {
					Quantity: -1,
				},
			},
			{ $limit: 5 },
		],
		function (err, result) {
			res.json(result);
		}
	);
};
LineController.getTopProdutosVYear = function (req, res, next) {
	var year = req.params.year;
	Line.aggregate(
		[
			{
				$match: {
					FiscalYear: { $eq: parseInt(year) },
					$or: [
						{
							InvoiceId: { $exists: true },
						},
						{
							$and: [
								{
									StockMovementId: {
										$exists: true,
									},
								},
								{
									MovementType: { $eq: 'NC' },
								},
							],
						},
					],
				},
			},
			{
				$group: {
					_id: {Product:'$ProductCode',ProductDescription:'$ProductDescription'},
					soma: {
						$sum: {
							$cond: [
								{
									$ifNull: ['$InvoiceId', false],
								},
								'$CreditAmount',
								0,
							],
						},
					},
					sub: {
						$sum: {
							$cond: [
								{
									$ifNull: ['$StockMovementId', false],
								},
								'$CreditAmount',
								0,
							],
						},
					},
				},
			},
			{
				$addFields: {
					QuantidadeVendida: {
						$subtract: ['$soma', '$sub'],
					},
				},
			},
			{
				$sort: {
					QuantidadeVendida: -1,
				},
			},
			{ $limit: 5 },
		],
		function (err, result) {
			res.json(result);
		}
	);
};

LineController.getQuantityFirst = function (req, res, next) {
	var year = req.params.year;
	var code = req.params.code;
	Line.aggregate(
		[
			{
				$match: {
					ProductCode: code,
					TaxPointDate: {
						$gte:  new Date(year + '-01-01T00:00:00.000Z'),
						$lte:  new Date(year + '-03-30T23:59:59.000Z'),
					},
					$or: [
						{
							InvoiceId: { $exists: true },
						},
						{
							$and: [
								{
									StockMovementId: {
										$exists: true,
									},
								},
								{
									MovementType: { $eq: 'NC' },
								},
							],
						},
					],
				},
			},
			{
				$group: {
					_id: '$ProductCode',
					soma: {
						$sum: {
							$cond: [
								{
									$ifNull: ['$InvoiceId', false],
								},
								'$Quantity',
								0,
							],
						},
					},
					sub: {
						$sum: {
							$cond: [
								{
									$ifNull: ['$StockMovementId', false],
								},
								'$Quantity',
								0,
							],
						},
					},
				},
			},
			{
				$addFields: {
					QuantidadeVendida: {
						$subtract: ['$soma', '$sub'],
					},
				},
			},
		],
		function (err, result) {
			res.json(result);
		}
	);
};
LineController.getMoneyFirst = function (req, res, next) {
	var year = req.params.year;
	var code = req.params.code;
	Line.aggregate(
		[
			{
				$match: {
					ProductCode: code,
					TaxPointDate: {
						$gte:  new Date(year + '-01-01T00:00:00.000Z'),
						$lte:  new Date(year + '-03-30T23:59:59.000Z'),
					},
					$or: [
						{
							InvoiceId: { $exists: true },
						},
						{
							$and: [
								{
									StockMovementId: {
										$exists: true,
									},
								},
								{
									MovementType: { $eq: 'NC' },
								},
							],
						},
					],
				},
			},
			{
				$group: {
					_id: '$ProductCode',
					soma: {
						$sum: {
							$cond: [
								{
									$ifNull: ['$InvoiceId', false],
								},
								'$CreditAmount',
								0,
							],
						},
					},
					sub: {
						$sum: {
							$cond: [
								{
									$ifNull: ['$StockMovementId', false],
								},
								'$CreditAmount',
								0,
							],
						},
					},
				},
			},
			{
				$addFields: {
					QuantidadeVendida: {
						$subtract: ['$soma', '$sub'],
					},
				},
			},
		],
		function (err, result) {
			res.json(result);
		}
	);
};

LineController.getQuantitySecond = function (req, res, next) {
	var year = req.params.year;
	var code = req.params.code;
	Line.aggregate(
		[
			{
				$match: {
					ProductCode: code,
					TaxPointDate: {
						$gte:  new Date(year + '-04-01T00:00:00.000Z'),
						$lte:  new Date(year + '-06-30T23:59:59.000Z'),
					},
					$or: [
						{
							InvoiceId: { $exists: true },
						},
						{
							$and: [
								{
									StockMovementId: {
										$exists: true,
									},
								},
								{
									MovementType: { $eq: 'NC' },
								},
							],
						},
					],
				},
			},
			{
				$group: {
					_id: '$ProductCode',
					soma: {
						$sum: {
							$cond: [
								{
									$ifNull: ['$InvoiceId', false],
								},
								'$Quantity',
								0,
							],
						},
					},
					sub: {
						$sum: {
							$cond: [
								{
									$ifNull: ['$StockMovementId', false],
								},
								'$Quantity',
								0,
							],
						},
					},
				},
			},
			{
				$addFields: {
					QuantidadeVendida: {
						$subtract: ['$soma', '$sub'],
					},
				},
			},
		],
		function (err, result) {
			res.json(result);
		}
	);
};
LineController.getMoneySecond = function (req, res, next) {
	var year = req.params.year;
	var code = req.params.code;
	Line.aggregate(
		[
			{
				$match: {
					ProductCode: code,
					TaxPointDate: {
						$gte:  new Date(year + '-04-01T00:00:00.000Z'),
						$lte:  new Date(year + '-06-30T23:59:59.000Z'),
					},
					$or: [
						{
							InvoiceId: { $exists: true },
						},
						{
							$and: [
								{
									StockMovementId: {
										$exists: true,
									},
								},
								{
									MovementType: { $eq: 'NC' },
								},
							],
						},
					],
				},
			},
			{
				$group: {
					_id: '$ProductCode',
					soma: {
						$sum: {
							$cond: [
								{
									$ifNull: ['$InvoiceId', false],
								},
								'$CreditAmount',
								0,
							],
						},
					},
					sub: {
						$sum: {
							$cond: [
								{
									$ifNull: ['$StockMovementId', false],
								},
								'$CreditAmount',
								0,
							],
						},
					},
				},
			},
			{
				$addFields: {
					QuantidadeVendida: {
						$subtract: ['$soma', '$sub'],
					},
				},
			},
		],
		function (err, result) {
			res.json(result);
		}
	);
};

LineController.getQuantityThird = function (req, res, next) {
	var year = req.params.year;
	var code = req.params.code;
	Line.aggregate(
		[
			{
				$match: {
					ProductCode: code,
					TaxPointDate: {
						$gte:  new Date(year + '-07-01T00:00:00.000Z'),
						$lte:  new Date(year + '-09-30T23:59:59.000Z'),
					},
					$or: [
						{
							InvoiceId: { $exists: true },
						},
						{
							$and: [
								{
									StockMovementId: {
										$exists: true,
									},
								},
								{
									MovementType: { $eq: 'NC' },
								},
							],
						},
					],
				},
			},
			{
				$group: {
					_id: '$ProductCode',
					soma: {
						$sum: {
							$cond: [
								{
									$ifNull: ['$InvoiceId', false],
								},
								'$Quantity',
								0,
							],
						},
					},
					sub: {
						$sum: {
							$cond: [
								{
									$ifNull: ['$StockMovementId', false],
								},
								'$Quantity',
								0,
							],
						},
					},
				},
			},
			{
				$addFields: {
					QuantidadeVendida: {
						$subtract: ['$soma', '$sub'],
					},
				},
			},
		],
		function (err, result) {
			res.json(result);
		}
	);
};
LineController.getMoneyThird = function (req, res, next) {
	var year = req.params.year;
	var code = req.params.code;
	Line.aggregate(
		[
			{
				$match: {
					ProductCode: code,
					TaxPointDate: {
						$gte:  new Date(year + '-07-01T00:00:00.000Z'),
						$lte:  new Date(year + '-09-30T23:59:59.000Z'),
					},
					$or: [
						{
							InvoiceId: { $exists: true },
						},
						{
							$and: [
								{
									StockMovementId: {
										$exists: true,
									},
								},
								{
									MovementType: { $eq: 'NC' },
								},
							],
						},
					],
				},
			},
			{
				$group: {
					_id: '$ProductCode',
					soma: {
						$sum: {
							$cond: [
								{
									$ifNull: ['$InvoiceId', false],
								},
								'$CreditAmount',
								0,
							],
						},
					},
					sub: {
						$sum: {
							$cond: [
								{
									$ifNull: ['$StockMovementId', false],
								},
								'$CreditAmount',
								0,
							],
						},
					},
				},
			},
			{
				$addFields: {
					QuantidadeVendida: {
						$subtract: ['$soma', '$sub'],
					},
				},
			},
		],
		function (err, result) {
			res.json(result);
		}
	);
};
LineController.getQuantityForth = function (req, res, next) {
	var year = req.params.year;
	var code = req.params.code;
	Line.aggregate(
		[
			{
				$match: {
					ProductCode: code,
					TaxPointDate: {
						$gte: new Date(year + '-10-01T00:00:00.000Z'),
						$lte: new Date(year + '-12-31T23:59:59.000Z'),
					},
					$or: [
						{
							InvoiceId: { $exists: true },
						},
						{
							$and: [
								{
									StockMovementId: {
										$exists: true,
									},
								},
								{
									MovementType: { $eq: 'NC' },
								},
							],
						},
					],
				},
			},
			{
				$group: {
					_id: '$ProductCode',
					soma: {
						$sum: {
							$cond: [
								{
									$ifNull: ['$InvoiceId', false],
								},
								'$Quantity',
								0,
							],
						},
					},
					sub: {
						$sum: {
							$cond: [
								{
									$ifNull: ['$StockMovementId', false],
								},
								'$Quantity',
								0,
							],
						},
					},
				},
			},
			{
				$addFields: {
					QuantidadeVendida: {
						$subtract: ['$soma', '$sub'],
					},
				},
			},
		],
		function (err, result) {
			res.json(result);
		}
	);
};
LineController.getMoneyForth = function (req, res, next) {
	var year = req.params.year;
	var code = req.params.code;
	Line.aggregate(
		[
			{
				$match: {
					ProductCode: code,
					TaxPointDate: {
						$gte: new Date(year + '-10-01T00:00:00.000Z'),
						$lte: new Date(year + '-12-31T23:59:59.000Z'),
					},
					$or: [
						{
							InvoiceId: { $exists: true },
						},
						{
							$and: [
								{
									StockMovementId: {
										$exists: true,
									},
								},
								{
									MovementType: { $eq: 'NC' },
								},
							],
						},
					],
				},
			},
			{
				$group: {
					_id: '$ProductCode',
					soma: {
						$sum: {
							$cond: [
								{
									$ifNull: ['$InvoiceId', false],
								},
								'$CreditAmount',
								0,
							],
						},
					},
					sub: {
						$sum: {
							$cond: [
								{
									$ifNull: ['$StockMovementId', false],
								},
								'$CreditAmount',
								0,
							],
						},
					},
				},
			},
			{
				$addFields: {
					QuantidadeVendida: {
						$subtract: ['$soma', '$sub'],
					},
				},
			},
		],
		function (err, result) {
			res.json(result);
		}
	);
};
LineController.queryDoAbilio=function(req,res,next){
	const year=req.params.year;
	Line.aggregate(
		[{$match: {
			FiscalYear:parseInt(year),
			$or:[
						  {
							InvoiceId:{$exists:true}
						  },
						  {
							$and:
							[
							  {
								StockMovementId:{
								  $exists:true
								},
							  },
							  {
								MovementType:{$eq:"NC"},
							  }
							]
							}
						  ]
		  }}, {$group: {
						_id: null,
						soma:{
						  $sum:{
						  $cond:[{
							$ifNull:["$InvoiceId",false]
						  },
						  '$CreditAmount',
						  0]
						}
						},
						sub:{
						  $sum:{
						  $cond:[{
							$ifNull:["$StockMovementId",false]
						  },
						  '$CreditAmount',
						  0]
						}
						}
					  }}, {$addFields: {
			QuantidadeVendida: {
						  $subtract:["$soma","$sub"]
						}
		  }}]
	,
		function (err, result) {
			res.json(result);
		})
}
LineController.getVendasMes=function(req,res,next){
	let year=req.params.year;
	Line.aggregate(
		[{$match: {
			FiscalYear:parseInt(year),
			$or:[
						  {
							InvoiceId:{$exists:true}
						  },
						  {
							$and:
							[
							  {
								StockMovementId:{
								  $exists:true
								},
							  },
							  {
								MovementType:{$eq:"NC"},
							  }
							]
							}
						  ]
		  }}, {$group: {
						_id: {$month:"$TaxPointDate"},
						soma:{
						  $sum:{
						  $cond:[{
							$ifNull:["$InvoiceId",false]
						  },
						  '$CreditAmount',
						  0]
						}
						},
						sub:{
						  $sum:{
						  $cond:[{
							$ifNull:["$StockMovementId",false]
						  },
						  '$CreditAmount',
						  0]
						}
						}
					  }},
			{$addFields: {
				QuantidadeVendida: {
						  $subtract:["$soma","$sub"]
						}
		  }
		  },
		  {$sort: {
			_id: 1,
		  }}
		  ]
	  ,
	  function(err,result){
		res.json(result);
	  }
	)
  }



  
LineController.getVendasFirst=function(req,res,next){
	var year=req.params.year;
	Line.aggregate(
		[{$match: {
			TaxPointDate:{
			  $gte:new Date(year+"-01-01T00:00:00.000Z"),
			  $lte:new Date(year+"-03-31T23:59:59.000Z")
			},
			$or: [
				{
					InvoiceId: { $exists: true },
				},
				{
					$and: [
						{
							StockMovementId: {
								$exists: true,
							},
						},
						{
							MovementType: { $eq: 'NC' },
						},
					],
				},
			],
		  }}, {$group: {
			_id: null,
			soma:{
			  $sum:{
			  $cond:[{
				$ifNull:["$InvoiceId",false]
			  },
			  '$CreditAmount',
			  0]
			}
			},
			sub:{
			  $sum:{
			  $cond:[{
				$ifNull:["$StockMovementId",false]
			  },
			  '$CreditAmount',
			  0]
			}
			}
		  }}, {$addFields: {
QuantidadeVendida: {
			  $subtract:["$soma","$sub"]
			}
}}]
		  ,
		function (err, result) {
			res.json(result);
		}
	)
}
LineController.getVendasSecond=function(req,res,next){
	var year=req.params.year;
	Line.aggregate(
		[{$match: {
			TaxPointDate:{
			  $gte:new Date(year+"-04-01T00:00:00.000Z"),
			  $lte:new Date(year+"-06-30T23:59:59.000Z")
			},
			$or: [
				{
					InvoiceId: { $exists: true },
				},
				{
					$and: [
						{
							StockMovementId: {
								$exists: true,
							},
						},
						{
							MovementType: { $eq: 'NC' },
						},
					],
				},
			],
		  }}, {$group: {
			_id: null,
			soma:{
			  $sum:{
			  $cond:[{
				$ifNull:["$InvoiceId",false]
			  },
			  '$CreditAmount',
			  0]
			}
			},
			sub:{
			  $sum:{
			  $cond:[{
				$ifNull:["$StockMovementId",false]
			  },
			  '$CreditAmount',
			  0]
			}
			}
		  }}, {$addFields: {
QuantidadeVendida: {
			  $subtract:["$soma","$sub"]
			}
}}]
		  ,
		function (err, result) {
			res.json(result);
		}
	)
}
LineController.getVendasThird=function(req,res,next){
	var year=req.params.year;
	Line.aggregate(
		[{$match: {
			TaxPointDate:{
			  $gte:new Date(year+"-07-01T00:00:00.000Z"),
			  $lte:new Date(year+"-09-30T23:59:59.000Z")
			},
			$or: [
				{
					InvoiceId: { $exists: true },
				},
				{
					$and: [
						{
							StockMovementId: {
								$exists: true,
							},
						},
						{
							MovementType: { $eq: 'NC' },
						},
					],
				},
			],
		  }}, {$group: {
			_id: null,
			soma:{
			  $sum:{
			  $cond:[{
				$ifNull:["$InvoiceId",false]
			  },
			  '$CreditAmount',
			  0]
			}
			},
			sub:{
			  $sum:{
			  $cond:[{
				$ifNull:["$StockMovementId",false]
			  },
			  '$CreditAmount',
			  0]
			}
			}
		  }}, {$addFields: {
QuantidadeVendida: {
			  $subtract:["$soma","$sub"]
			}
}}]
		  ,
		function (err, result) {
			res.json(result);
		}
	)
}
LineController.getVendasForth=function(req,res,next){
	var year=req.params.year;
	Line.aggregate(
		[{$match: {
			TaxPointDate:{
			  $gte:new Date(year+"-10-01T00:00:00.000Z"),
			  $lte:new Date(year+"-12-31T23:59:59.000Z")
			},
			$or: [
				{
					InvoiceId: { $exists: true },
				},
				{
					$and: [
						{
							StockMovementId: {
								$exists: true,
							},
						},
						{
							MovementType: { $eq: 'NC' },
						},
					],
				},
			],
		  }}, {$group: {
			_id: null,
			soma:{
			  $sum:{
			  $cond:[{
				$ifNull:["$InvoiceId",false]
			  },
			  '$CreditAmount',
			  0]
			}
			},
			sub:{
			  $sum:{
			  $cond:[{
				$ifNull:["$StockMovementId",false]
			  },
			  '$CreditAmount',
			  0]
			}
			}
		  }}, {$addFields: {
QuantidadeVendida: {
			  $subtract:["$soma","$sub"]
			}
}}]
		  ,
		function (err, result) {
			res.json(result);
		}
	)
}
LineController.getVendasFirstQ=function(req,res,next){
	var year=req.params.year;
	Line.aggregate(
		[{$match: {
			TaxPointDate:{
			  $gte:new Date(year+"-01-01T00:00:00.000Z"),
			  $lte:new Date(year+"-03-31T23:59:59.000Z")
			},
			$or: [
				{
					InvoiceId: { $exists: true },
				},
				{
					$and: [
						{
							StockMovementId: {
								$exists: true,
							},
						},
						{
							MovementType: { $eq: 'NC' },
						},
					],
				},
			],
		  }},  {$group: {
			_id: null,
			soma:{
			  $sum:{
			  $cond:[{
				$ifNull:["$InvoiceId",false]
			  },
			  '$Quantity',
			  0]
			}
			},
			sub:{
			  $sum:{
			  $cond:[{
				$ifNull:["$StockMovementId",false]
			  },
			  '$Quantity',
			  0]
			}
			}
		  }}, {$addFields: {
QuantidadeVendida: {
			  $subtract:["$soma","$sub"]
			}
}}]
		  ,
		function (err, result) {
			res.json(result);
		}
	)
}
LineController.getVendasSecondQ=function(req,res,next){
	var year=req.params.year;
	Line.aggregate(
		[{$match: {
			TaxPointDate:{
			  $gte:new Date(year+"-04-01T00:00:00.000Z"),
			  $lte:new Date(year+"-06-30T23:59:59.000Z")
			},
			$or: [
				{
					InvoiceId: { $exists: true },
				},
				{
					$and: [
						{
							StockMovementId: {
								$exists: true,
							},
						},
						{
							MovementType: { $eq: 'NC' },
						},
					],
				},
			],
		  }}, {$group: {
			_id: null,
			soma:{
			  $sum:{
			  $cond:[{
				$ifNull:["$InvoiceId",false]
			  },
			  '$Quantity',
			  0]
			}
			},
			sub:{
			  $sum:{
			  $cond:[{
				$ifNull:["$StockMovementId",false]
			  },
			  '$Quantity',
			  0]
			}
			}
		  }}, {$addFields: {
QuantidadeVendida: {
			  $subtract:["$soma","$sub"]
			}
}}]
		  ,
		function (err, result) {
			res.json(result);
		}
	)
}
LineController.getVendasThirdQ=function(req,res,next){
	var year=req.params.year;
	Line.aggregate(
		[{$match: {
			TaxPointDate:{
			  $gte:new Date(year+"-07-01T00:00:00.000Z"),
			  $lte:new Date(year+"-09-30T23:59:59.000Z")
			},
			$or: [
				{
					InvoiceId: { $exists: true },
				},
				{
					$and: [
						{
							StockMovementId: {
								$exists: true,
							},
						},
						{
							MovementType: { $eq: 'NC' },
						},
					],
				},
			],
		  }}, {$group: {
			_id: null,
			soma:{
			  $sum:{
			  $cond:[{
				$ifNull:["$InvoiceId",false]
			  },
			  '$Quantity',
			  0]
			}
			},
			sub:{
			  $sum:{
			  $cond:[{
				$ifNull:["$StockMovementId",false]
			  },
			  '$Quantity',
			  0]
			}
			}
		  }}, {$addFields: {
QuantidadeVendida: {
			  $subtract:["$soma","$sub"]
			}
}}]
		  ,
		function (err, result) {
			res.json(result);
		}
	)
}
LineController.getVendasForthQ=function(req,res,next){
	var year=req.params.year;
	Line.aggregate(
		[{$match: {
			TaxPointDate:{
			  $gte:new Date(year+"-10-01T00:00:00.000Z"),
			  $lte:new Date(year+"-12-31T23:59:59.000Z")
			},
			$or: [
				{
					InvoiceId: { $exists: true },
				},
				{
					$and: [
						{
							StockMovementId: {
								$exists: true,
							},
						},
						{
							MovementType: { $eq: 'NC' },
						},
					],
				},
			],
		  }}, {$group: {
			_id: null,
			soma:{
			  $sum:{
			  $cond:[{
				$ifNull:["$InvoiceId",false]
			  },
			  '$Quantity',
			  0]
			}
			},
			sub:{
			  $sum:{
			  $cond:[{
				$ifNull:["$StockMovementId",false]
			  },
			  '$Quantity',
			  0]
			}
			}
		  }}, {$addFields: {
QuantidadeVendida: {
			  $subtract:["$soma","$sub"]
			}
}}]
		  ,
		function (err, result) {
			res.json(result);
		}
	)
}
module.exports = LineController;
