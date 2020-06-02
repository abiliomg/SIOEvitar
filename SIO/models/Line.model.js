var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderReferences = require('./OrderReferences.model.js');
var References = require('./References.model.js');
var ProductSerialNumber = require('./ProductSerialNumber.model.js');
var Tax = require('./Tax.model.js');
var CustomsInformation = require('./CustomsInformation.model.js');
var orderReferencesSchema = mongoose.model('OrderReferences').schema;
var referencesSchema = mongoose.model('References').schema;
var productSerialNumberSchema = mongoose.model('ProductSerialNumber').schema;
var taxSchema = mongoose.model('Tax').schema;
var customsInformationSchema = mongoose.model('CustomsInformation').schema;

var LineSchema = new Schema({
	LineNumber: { type: Number },
	OrderReferences: [{ type: orderReferencesSchema }],
	ProductCode: { type: String },
	ProductDescription: { type: String },
	Quantity: { type: Number },
	UnitOfMeasure: { type: String },
	UnitPrice: { type: Number },
	TaxBase: { type: Number },
	TaxPointDate: { type: Date },
	References: [{ type: referencesSchema }],
	Description: { type: String },
	ProductSerialNumber: { type: productSerialNumberSchema },
	DebitAmount: { type: Number },
	CreditAmount: { type: Number },
	Tax: { type: taxSchema },
	TaxExemptionReason: { type: String },
	TaxExemptionCode: { type: String },
	SettlementAmount: { type: Number },
    CustomsInformation: { type: customsInformationSchema },
	FiscalYear: {type:Number},
	
	InvoiceId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Invoice',
    },
    PaymentId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Payment',
    },
    WorkDocumentId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'WorkDocument',
    },
    StockMovementId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'StockMovement',
	},
});

module.exports = mongoose.model('Line', LineSchema);
