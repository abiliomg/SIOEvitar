var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AddressSchema= new Schema({


BuildingNumber: {type:String},
StreetName: {type:String},
AddressDetail: {type: String},
City: {type:String},
PostalCode :{type:String},
Region: {type: String},
Country: {type:String}

});

module.exports=mongoose.model('Address', AddressSchema);