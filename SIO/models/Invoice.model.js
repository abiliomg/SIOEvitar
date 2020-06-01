var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DocumentStatus = require('./DocumentStatus.model.js');
var SpecialRegimes = require('./SpecialRegimes.model.js');
var ShipTo = require('./ShipTo.model.js');
var ShipFrom = require('./ShipFrom.model.js');
var Line = require('./Line.model.js');
var DocumentsTotals = require('./DocumentsTotals.model.js');
var WithholdingTax = require('./WithholdingTax.model.js');
var documentStatusSchema = mongoose.model('DocumentStatus').schema;
var specialRegimesSchema = mongoose.model('SpecialRegimes').schema;
var shipToSchema = mongoose.model('ShipTo').schema;
var shipFromSchema = mongoose.model('ShipFrom').schema;
var lineSchema = mongoose.model('Line').schema;
var documentsTotalsSchema = mongoose.model('DocumentsTotals').schema;
var withholdingTaxSchema = mongoose.model('WithholdingTax').schema;

var InvoiceSchema = new Schema({
	InvoiceNo: { type: String },
	Atcud: { type: String },
	DocumentStatus: { type: documentStatusSchema },
	Hash: { type: String },
	HashControl: { type: String },
	Period: { type: Number },
	InvoiceDate: { type: Date },
	InvoiceType: { type: String },
	SpecialRegimes: { type: specialRegimesSchema },
	SourceID: { type: String },
	EacCode: { type: String },
	SystemEntryDate: { type: Date },
	TransactionID: { type: String },
	CustomerID: { type: String },
	ShipTo: { type: shipToSchema },
	ShipFrom: { type: shipFromSchema },
	MovementEndTime: { type: Date },
	MovementStartTime: { type: Date },
	DocumentsTotals: { type: documentsTotalsSchema },
	WithholdingTax: [{ type: withholdingTaxSchema }],
	FiscalYear: { type: Number },
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
