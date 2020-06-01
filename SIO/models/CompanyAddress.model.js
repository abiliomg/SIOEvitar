var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompanyAddressSchema= new Schema({



   BuildingNumber: {type:String},
     StreetNumber: {type: String},
     AddressDetail: {type:String},
     City: {type:String},
     PostalCode: {type:String},
     Region: {type:String},
     Country: {type:String}
});

module.exports=mongoose.model('CompanyAddress', CompanyAddressSchema);