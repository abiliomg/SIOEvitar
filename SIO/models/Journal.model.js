var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JournalSchema = new Schema({
	JournalID: { type: String },
	Description: { type: String },
	Transaction: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Transaction',
		},
	],
});

module.exports = mongoose.model('Journal', JournalSchema);
