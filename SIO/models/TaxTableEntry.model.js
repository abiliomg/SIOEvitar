var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaxTableEntrySchema = new Schema({
    TaxType:String,
    TaxCountryRegion:String,
    TaxCode:String,
    Description:String,
    TaxExpirationDate:Date,
    TaxPercentage:Number,
   TaxAmount:Number,
});

module.exports=mongoose.model('TaxTableEntry', TaxTableEntrySchema);