var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var journalSchema = require('./Journal.model.js');
var Journal = mongoose.model('Journal').schema;


var GeneralLedgerEntriesSchema = new Schema({
    NumberOfEntries: {type:Number},
    TotalDebit: {type:Number},
    TotalCredit: {type:Number},
    FiscalYear: {type:Number}
});

module.exports=mongoose.model('GeneralLedgerEntries', GeneralLedgerEntriesSchema);