var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DebitLineSchema= new Schema({


     RecordID: {type:String},
     AccountID: {type:String},
     SourceDocumentID: {type:String},
     SystemEntryDate: {type: Date},
     Description: {type: String},
     DebitAmount: {type: Number}
});

module.exports=mongoose.model('DebitLine', DebitLineSchema);