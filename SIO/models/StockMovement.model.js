var mongoose = require('mongoose');
var Schema = mongoose.Schema,
	DocumentStatusSchema = require('./DocumentStatus.model.js'),
	DocumentStatus = mongoose.model('DocumentStatus').schema,
	ShipToSchema = require('./ShipTo.model.js'),
	ShipTo = mongoose.model('ShipTo').schema,
	ShipFromSchema = require('./ShipFrom.model.js'),
	ShipFrom = mongoose.model('ShipFrom').schema,
	LineSchema = require('./Line.model.js'),
	Line = mongoose.model('Line').schema,
	DocumentTotalsSchema = require('./DocumentTotals.model.js'),
	DocumentTotals = mongoose.model('DocumentTotals').schema;

var StockMovementSchema = new Schema({
	DocumentNumber: String,
	Atcud: String,
	DocumentStatus: DocumentStatus,
	Hash: String,
	HashControl: String,
	Period: Number,
	MovementDate: Date,
	MovementType: String,
	SystemEntryDate: Date,
	TransactionID: String,
	CustomerID: String,
	SupplierID: String,
	SourceID: String,
	EacCode: String,
	MovementComments: String,
	ShipTo: ShipTo,
	ShipFrom: ShipFrom,
	MovementEndTime: Date,
	MovementStartTime: Date,
	AtdCodeID: String,
	DocumentTotals: DocumentTotals,
	FiscalYear:Number
});

module.exports = mongoose.model('StockMovement', StockMovementSchema);
