var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShipToAddressSchema = new Schema({
    BuildingNumber: {type: String},
    StreetName: {type: String},
    AddressDetail: {type: String},
    City: {type: String},
    PostalCode: {type: String},
    Region: {type: String},
    Country: {type: String}
});

module.exports=mongoose.model('ShipToAddress', ShipToAddressSchema);