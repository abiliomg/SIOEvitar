var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaxSchema = new Schema({
    TaxType:String,
    TaxCountryRegion:String,
    TaxCode:String,
    TaxPercentage:Number,
    TaxAmount:Number,
});

module.exports=mongoose.model('Tax', TaxSchema);