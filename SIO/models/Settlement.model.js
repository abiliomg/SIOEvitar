var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SettlementSchema = new Schema({
    SettlementDiscount: {type: String},
    SettlementAmount: {type: Number},
    SettlementDate: {type: Date},
    PaymentTerms: {type: String}
});

module.exports=mongoose.model('Settlement', SettlementSchema);