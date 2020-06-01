var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SourceDocumentID = require('./SourceDocumentID.model.js');
var Tax = require('./Tax.model.js');
var sourceDocumentIDSchema = mongoose.model('SourceDocumentID').schema;
var taxSchema = mongoose.model('Tax').schema;

var LinePaySchema = new Schema({
    LineNumber:  {type:Number},
    SourceDocumentID: [{type:sourceDocumentIDSchema}],
    SettlementAmount: {type:Number},
    DebitAmount: {type:Number},
    CreditAmount: {type:Number},
    Tax: {type:taxSchema},
    TaxExemptionReason: {type:String},
    TaxExempetionCode: {type:String}
  
});

module.exports=mongoose.model('LinePay', LinePaySchema);