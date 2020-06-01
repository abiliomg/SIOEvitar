var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TransactionSchema = new Schema({
	TransactionID: String,
	Period: Number,
	TransactionDate: Date,
	SourceID: String,
	Description: String,
	DocArchivalNumber: String,
	TransactionType: String,
	GlPostingDate: Date,
	CustomerID: String,
	SupplierID: String,
	Lines: {
		CreditLine: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'CreditLine',
			},
		],
		DebitLine: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'CreditLine',
			},
		],
	},
});

module.exports = mongoose.model('Transaction', TransactionSchema);
