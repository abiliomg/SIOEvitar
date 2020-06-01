var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PaymentDTSchema = new Schema({
    PaymentMechanism: {type:String},
    PaymentAmount: {type: Number},
    PaymentDate: {type: Date}
});

module.exports=mongoose.model('PaymentDT', PaymentDTSchema);