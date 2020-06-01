var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BillingAddressSchema = require('./BillingAddress.model.js');
var ShipToAddressSchema = require('./ShipToAddress.model.js');
var BillingAddress = mongoose.model('BillingAddress').schema;
var ShipToAddress = mongoose.model('ShipToAddress').schema;

var CustomerSchema = new Schema({
	CustomerID: { type: String },
	AccountID: { type: String },
	CustomerTaxID: { type: String },
	CompanyName: { type: String },
	Contact: { type: String },
	BillingAddress: { type: BillingAddress },
	ShipToAddress: [{ type: ShipToAddress }],
	Telephone: { type: String },
	Fax: { type: String },
	Email: { type: String },
	WebSite: { type: String },
	SelfBillingIndicator: { type: Number },
    FiscalYear: {type:Number}
});

module.exports = mongoose.model('Customer', CustomerSchema);
