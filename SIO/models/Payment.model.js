var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DocumentStatus = require('./DocumentStatus.model.js');
var PaymentMethod = require('./PaymentMethod.model.js');
var LinePay = require('./LinePay.model.js');
var DocumentsTotals = require('./DocumentsTotals.model.js');
var WithholdingTax = require('./WithholdingTax.model.js');
var documentStatusSchema = mongoose.model('DocumentStatus').schema;
var paymentMethodSchema = mongoose.model('PaymentMethod').schema;
var LinePaySchema = mongoose.model('LinePay').schema;
var documentsTotalsSchema = mongoose.model('DocumentsTotals').schema;
var withholdingTaxSchema = mongoose.model('WithholdingTax').schema;

var PaymentSchema = new Schema({
	PaymentRefNo: { type: String },
	Atcud: { type: String },
	Period: { type: Number },
	TransactionID: { type: String },
	TransactionDate: { type: Date },
	PaymentType: { type: String },
	Description: { type: String },
	SystemID: { type: String },
	DocumentStatus: { type: documentStatusSchema },
	PaymentMethod: [{ type: paymentMethodSchema }],
	SourceID: { type: String },
	SystemEntryDate: { type: Date },
	CustomerID: { type: String },
	Line: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Line',
		},
	],
	DocumentsTotals: { type: documentsTotalsSchema },
	WithholdingTax: [{ type: withholdingTaxSchema }],
});

module.exports = mongoose.model('Payment', PaymentSchema);
