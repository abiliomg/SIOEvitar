var mongoose = require('mongoose');
var Schema = mongoose.Schema;

CurrencySchema = require('./Currency.model.js'),
Currency = mongoose.model('Currency').schema
SettlementSchema = require('./Settlement.model.js'),
Settlement = mongoose.model('Settlement').schema
PaymentDTSchema = require('./PaymentDT.model.js'),
PaymentDT = mongoose.model('PaymentDT').schema
var DocumentsTotalsSchema= new Schema({


     TaxPayable: {type:Number},
   NetTotal: {type:Number},
    GrossTotal: {type:Number},
     Currency: {type: Currency},
   Settlement: {type: Settlement},
   Payment: {type: PaymentDT}

});

module.exports=mongoose.model('DocumentsTotals', DocumentsTotalsSchema);