var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SalesInvoiceSchema = new Schema({
    NumberOfEntries: {type: Number},
    TotalDebit: {type: Number},
    TotalCredit: {type: Number},
    FiscalYear: {type:Number}
});

module.exports=mongoose.model('SalesInvoice', SalesInvoiceSchema);