var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Account = require('./Account.model.js');
var AccountSchema = mongoose.model('Account').schema;

var GeneralLedgerAccountsSchema = new Schema({
    TaxonomyReference: {type:String},
    Account: [{type:AccountSchema}]
});

module.exports=mongoose.model('GeneralLedgerAccounts', GeneralLedgerAccountsSchema);