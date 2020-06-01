var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SpecialRegimesSchema = new Schema({
    SelfBillingIndicator: {type:Number},
    CashVATSchemeIndicator: {type: Number},
    ThirdPartiesBillingIndicator: {type: Number}
});

module.exports=mongoose.model('SpecialRegimes', SpecialRegimesSchema);