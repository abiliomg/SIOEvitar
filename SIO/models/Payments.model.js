var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PaymentsSchema = new Schema({
    NumberOfEntries: {type: Number},
    TotalDebit: {type: Number},
    TotalCredit: {type: Number}
    
});

module.exports=mongoose.model('Payments', PaymentsSchema);