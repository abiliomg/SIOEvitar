var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SalesInvoiceSchema = require('./SalesInvoice.model.js');
var MovementOfGoodsSchema = require('./MovementOfGoods.model.js');
var WorkingDocumentsSchema = require('./WorkingDocuments.model.js');
var PaymentsSchema = require('./Payments.model.js');
var SalesInvoice = mongoose.model('SalesInvoice').schema;
var MovementOfGoods = mongoose.model('MovementOfGoods').schema;
var WorkingDocuments = mongoose.model('WorkingDocuments').schema;
var Payments = mongoose.model('Payments').schema;
var SourceDocumentsSchema = new Schema({
    SalesInvoice: SalesInvoice,
    MovementOfGoods: MovementOfGoods,
    WorkingDocuments:WorkingDocuments,
    Payments:Payments

});

module.exports=mongoose.model('SourceDocuments', SourceDocumentsSchema);