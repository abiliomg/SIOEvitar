var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AddressSchema = require('./Address.model.js');
var Address = mongoose.model('Address').schema;

var ShipToSchema = new Schema({
    DeliveryID: {type: String},
    DeliveryDate: {type: Date},
    WarehouseID: {type: String},
    LocationID: {type: String},
    Address: {type: Address}
});

module.exports=mongoose.model('ShipTo', ShipToSchema);