var mongoose = require('mongoose');
var Schema = mongoose.Schema;

CurrencySchema = require('./Currency.model.js'),
Currency = mongoose.model('Currency').schema
SettlementSchema = require('./Settlement.model.js'),
Settlement = mongoose.model('Settlement').schema
PaymentSchema = require('./Payment.model.js'),
Payment = mongoose.model('Payment').schema
var DocumentTotalsSchema= new Schema({


     TaxPayable: {type:Number},
   NetTotal: {type:Number},
    GrossTotal: {type:Number},
     Currency: {type: Currency},
   Settlement: [{type: Settlement}],
   Payment: [{type: Payment}]

});

module.exports=mongoose.model('DocumentTotals', DocumentTotalsSchema);