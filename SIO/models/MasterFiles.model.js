var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GeneralLedgerAccounts = require('./GeneralLedgerAccounts.model.js');
var Customer = require('./Customer.model.js');
var Supplier = require('./Supplier.model.js');
var Product = require('./Product.model.js');
var TaxTable = require('./TaxTable.model.js');
var generalLedgerAccountsSchema = mongoose.model('GeneralLedgerAccounts').schema;
var customerSchema = mongoose.model('Customer').schema;
var supplierSchema = mongoose.model('Supplier').schema;
var productSchema = mongoose.model('Product').schema;
var taxTableSchema = mongoose.model('TaxTable').schema;

var MasterFilesSchema = new Schema({
    GeneralLedgerAccounts:  {type:generalLedgerAccountsSchema},
    Customer: [{type:customerSchema}],
    Supplier: [{type:supplierSchema}],
    Product: [{type:productSchema}],
    TaxTable: {type:taxTableSchema},
  
});

module.exports=mongoose.model('MasterFiles', MasterFilesSchema);