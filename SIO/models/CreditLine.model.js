var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CreditLineSchema= new Schema({


     RecordId: {type:String},
     AccountID: {type: String},
     SourceDocumentID: {type:String},
     SystemEntryDate: {type:Date},
     Description: {type: String},
     CreditAmount: {type:Number}

});

module.exports=mongoose.model('CreditLine', CreditLineSchema);