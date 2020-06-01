var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DebitLine = require('./DebitLine.model.js');
var CreditLine = require('./CreditLine.model.js');
var debitLineSchema = mongoose.model('DebitLine').schema;
var creditLineSchema = mongoose.model('CreditLine').schema;

var LinesSchema = new Schema({
    DebitLine:  [{type:debitLineSchema}],
    CreditLine: [{type:creditLineSchema}]
  
});

module.exports=mongoose.model('Lines', LinesSchema);