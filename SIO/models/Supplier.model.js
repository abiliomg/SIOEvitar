var mongoose = require('mongoose');
var Schema = mongoose.Schema;
BillingAddressSchema = require('./BillingAddress.model.js'),
    BillingAddress = mongoose.model('BillingAddress').schema,
    ShipFromAddressSchema = require('./ShipFromAddress.model.js'),
    ShipFromAddress = mongoose.model('ShipFromAddress').schema;
var SupplierSchema = new Schema({
    SupplierID:String,
    AccountIDString:String,
    SupplierTaxID:String,
    CompanyName:String,
    Contact:String,
    BillingAddress:BillingAddress,
    ShipFromAddress:[ShipFromAddress],
    Telephone:String,
    Fax:String,
    Email:String,
    WebSite:String,
    SelfBillingIndicator:Number,
});

module.exports=mongoose.model('Supplier', SupplierSchema);