var mongoose = require('mongoose');
var Schema = mongoose.Schema;
(DocumentStatusSchema = require('./DocumentStatus.model.js')),
	(DocumentStatus = mongoose.model('DocumentStatus').schema),
	(LineSchema = require('./Line.model.js')),
	(Line = mongoose.model('Line').schema),
	(DocumentsTotalsSchema = require('./DocumentsTotals.model.js')),
	(DocumentsTotals = mongoose.model('DocumentsTotals').schema);
var WorkDocumentSchema = new Schema({
	DocumentNumber: String,
	Atcud: String,
	DocumentStatus: DocumentStatus,
	Hash: String,
	HashControl: String,
	Period: Number,
	WorkDate: Date,
	WorkType: String,
	SourceID: String,
	EacCode: String,
	SystemEntryDate: Date,
	TransactionID: String,
	CustomerID: String,
	Line: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Line',
		},
	],
	DocumentsTotals: DocumentsTotals,
});

module.exports = mongoose.model('WorkDocument', WorkDocumentSchema);
