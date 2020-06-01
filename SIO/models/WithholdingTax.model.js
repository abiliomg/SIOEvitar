var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WithholdingTaxSchema = new Schema({
    WithHoldingTaxType:String,
    WithHoldingTaxDescription:String,
    WithHoldingTaxAmount:Number
});

module.exports=mongoose.model('WithholdingTax', WithholdingTaxSchema);