var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorkingDocumentsSchema = new Schema({
    NumberOfEntries:Number,
    TotalDebit:Number,
    TotalCredit:Number
   
});

module.exports=mongoose.model('WorkingDocuments', WorkingDocumentsSchema);