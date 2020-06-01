var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HeaderSchema = require('./Header.model.js');
var MasterFilesSchema = require('./MasterFiles.model.js');
var Header = mongoose.model('Header').schema;
var MasterFiles = mongoose.model('MasterFiles').schema;
var GeneralLedgerEntriesSchema = require('./GeneralLedgerEntries.model.js');
var SourceDocumentsSchema = require('./SourceDocuments.model.js');
var GeneralLedgerEntries = mongoose.model('GeneralLedgerEntries').schema;
var SourceDocuments = mongoose.model('SourceDocuments').schema;
var AuditFileSchema= new Schema({
    Header:Header,
    MasterFiles:MasterFiles,
    GeneralLedgerEntries:GeneralLedgerEntries,
    SourceDocuments:SourceDocuments
});

module.exports=mongoose.model('AuditFile', AuditFileSchema);