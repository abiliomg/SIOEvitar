var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SourceDocumentIDSchema = new Schema({
    OriginatingON: {type:String},
    InvoiceDate: {type: Date},
    Description: {type: Number}
});

module.exports=mongoose.model('SourceDocumentID', SourceDocumentIDSchema);