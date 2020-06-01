var mongoose = require('mongoose');
var Schema = mongoose.Schema,
TaxTableEntrySchema = require('./TaxTableEntry.model.js'),
TaxTableEntry = mongoose.model('TaxTableEntry').schema;
var TaxTableSchema = new Schema({
    TaxTableEntry:[TaxTableEntry]
});

module.exports=mongoose.model('TaxTable', TaxTableSchema);