var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DocumentStatusSchema= new Schema({



    InvoiceStatus:{type: String},
    InvoiceStatusDate: {type: Date},
    Reason: {type: String},
    SourceID: {type: String},
    SourceBilling: {type:String}

});

module.exports=mongoose.model('DocumentStatus', DocumentStatusSchema);