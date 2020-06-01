var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PaymentMethodSchema = new Schema({
    PaymentMechanism: {type:String},
    PaymentAmount: {type: Number},
    PaymentDate: {type: Date}
});

module.exports=mongoose.model('PaymentMethod', PaymentMethodSchema);