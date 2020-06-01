var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CompanyAddress = require('./CompanyAddress.model.js');
var companyAddressSchema = mongoose.model('CompanyAddress').schema;


var HeaderSchema = new Schema({
    AuditFileVersion: {type:String},
    CompanyID: {type:String},
    TaxRegistrationNumber: {type:Number},
    TaxAccountingBasis: {type:String},
    CompanyName: {type:String},
    BusinessName: {type:String},
    CompanyAddress: {type:companyAddressSchema},
    FiscalYear: {type:Number},
    StartDate: {type:Date},
    EndDate: {type:Date},
    CurrencyCode: {type:String},
    DateCreated: {type:Date},
    TaxEntity: {type:String},
    ProductCompanyTaxID: {type:String},
    SoftwareCertificateNumber: {type:Number},
    ProductID: {type:String},
    ProductVersion: {type:String},
    HeaderComment: {type:String},
    Telephone: {type:String},
    Fax: {type:String},
    Email: {type:String},
    WebSite: {type:String}
});

module.exports=mongoose.model('Header', HeaderSchema);