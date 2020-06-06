var express = require('express');
var router = express.Router();
//var xmlparser = require('express-xml-bodyparser');
//var bodyparser =require('body-parser');
var parser = require('xml2json');
const mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
var InvoiceSchema = require('../models/Invoice.model.js');
var Invoice = mongoose.model('Invoice').schema;
var LineSchema = require('../models/Line.model.js');
var Line = mongoose.model('Line').schema;
var AccountSchema = require('../models/Account.model.js');
var Account = mongoose.model('Account').schema;
var CustomerSchema = require('../models/Customer.model.js');
var Customer = mongoose.model('Customer').schema;
var SupplierSchema = require('../models/Supplier.model.js');
var Supplier = mongoose.model('Supplier').schema;
var ProductSchema = require('../models/Product.model.js');
var Product = mongoose.model('Product').schema;
var StockMovementSchema = require('../models/StockMovement.model.js');
var StockMovement = mongoose.model('StockMovement').schema;
var WorkDocumentSchema = require('../models/WorkDocument.model.js');
var WorkDocument = mongoose.model('WorkDocument').schema;
var PaymentSchema = require('../models/Payment.model.js');
var Payment = mongoose.model('Payment').schema;
var JournalSchema = require('../models/Journal.model.js');
var Journal = mongoose.model('Journal').schema;
var TransactionSchema = require('../models/Transaction.model.js');
var Transaction = mongoose.model('Transaction').schema;
var CreditLineSchema = require('../models/CreditLine.model.js');
var CreditLine = mongoose.model('CreditLine').schema;
var DebitLineSchema = require('../models/DebitLine.model.js');
var DebitLine = mongoose.model('DebitLine').schema;
var HeaderSchema = require('../models/Header.model.js');
var Header = mongoose.model('Header').schema;
var TaxTableEntrySchema = require('../models/TaxTableEntry.model.js');
var TaxTableEntry = mongoose.model('TaxTableEntry').schema;
var GeneralLedgerEntriesSchema = require('../models/GeneralLedgerEntries.model.js');
var GeneralLedgerEntries = mongoose.model('GeneralLedgerEntries').schema;
var MovementOfGoodsSchema = require('../models/MovementOfGoods.model.js');
var MovementOfGoods = mongoose.model('MovementOfGoods').schema;
var SalesInvoicesSchema = require('../models/SalesInvoice.model.js');
var SalesInvoice = mongoose.model('SalesInvoice').schema;
var WorkingDocumentsSchema = require('../models/WorkingDocuments.model.js');
var WorkingDocuments = mongoose.model('WorkingDocuments').schema;
var PaymentsSchema = require('../models/Payments.model.js');
var Payments = mongoose.model('Payments').schema;
router.get('/test', async function (req, res, next) {
	var fileXml = path.join(__dirname, '../public/SAFT_EVITAR_01-01-2019_31-12-2019.xml');

	fs.readFile(fileXml, 'utf8', async function (err, xml) {
		if (err) throw err;
		var data = await parser.toJson(xml);
	var jsonObj = JSON.parse(data);
	var FiscalYear=jsonObj.AuditFile.Header.FiscalYear;
    const Header=await HeaderSchema.create(jsonObj.AuditFile.Header).then((dados)=>{
      res.json(dados);
    });

    //TaxTableEntrys
    var TaxTableEntrys = jsonObj.AuditFile.MasterFiles.TaxTable.TaxTableEntry;
		for (let i = 0; i < TaxTableEntrys.length; i++) {
			const TaxTableEntryData = await TaxTableEntrySchema.create(TaxTableEntrys[i]).then((dados) => {
				return dados;
			});
    }
    //GeneralLedgerEntries
    var GeneralLedgerEntries = jsonObj.AuditFile.GeneralLedgerEntries;
    var GeneralLedgerEntriesObj={
      NumberOfEntries: GeneralLedgerEntries.NumberOfEntries,
            TotalDebit: GeneralLedgerEntries.TotalDebit,
			TotalCredit: GeneralLedgerEntries.TotalCredit,
			FiscalYear:FiscalYear
    }
    const GeneralLedgerEntriesData = await GeneralLedgerEntriesSchema.create(GeneralLedgerEntriesObj).then((dados) => {
      return dados;
    });
    

		//Accounts
		var Accounts = jsonObj.AuditFile.MasterFiles.GeneralLedgerAccounts.Account;
		for (let i = 0; i < Accounts.length; i++) {
			const AccountData = await AccountSchema.create(Accounts[i]).then((dados) => {
				return dados;
			});
		}
		//Customers
		var Customers = jsonObj.AuditFile.MasterFiles.Customer;
		for (let i = 0; i < Customers.length; i++) {
			const CustomerData = await CustomerSchema.create(Customers[i]).then((dados) => {
				return dados;
			});
		}

		//Suppliers
		var Suppliers = jsonObj.AuditFile.MasterFiles.Supplier;
		for (let i = 0; i < Suppliers.length; i++) {
			const SupplierData = await SupplierSchema.create(Suppliers[i]).then((dados) => {
				return dados;
			});
		}

		//Products
		var Products = jsonObj.AuditFile.MasterFiles.Product;
		for (let i = 0; i < Products.length; i++) {
			const ProductData = await ProductSchema.create(Products[i]).then((dados) => {
				return dados;
			});
		}

    var SalesInvoices = jsonObj.AuditFile.SourceDocuments.SalesInvoices;
    var SalesInvoicesObj={
      NumberOfEntries: SalesInvoices.NumberOfEntries,
            TotalDebit: SalesInvoices.TotalDebit,
			TotalCredit: SalesInvoices.TotalCredit,
			FiscalYear:FiscalYear
    }
    const SalesInvoicesData =  SalesInvoicesSchema.create(SalesInvoicesObj).then((dados) => {
      return dados;
    });
		for (let i = 0; i < parseInt(SalesInvoices.NumberOfEntries); i++) {
			invoice = {
				InvoiceNo: SalesInvoices.Invoice[i].InvoiceNo,
				Atcud: SalesInvoices.Invoice[i].Atcud,
				DocumentStatus: SalesInvoices.Invoice[i].DocumentStatus,
				Hash: SalesInvoices.Invoice[i].Hash,
				HashControl: SalesInvoices.Invoice[i].HashControl,
				Period: SalesInvoices.Invoice[i].Period,
				InvoiceDate: SalesInvoices.Invoice[i].InvoiceDate,
				InvoiceType: SalesInvoices.Invoice[i].InvoiceType,
				SpecialRegimes: SalesInvoices.Invoice[i].SpecialRegimes,
				SourceID: SalesInvoices.Invoice[i].SourceID,
				EacCode: SalesInvoices.Invoice[i].EacCode,
				SystemEntryDate: SalesInvoices.Invoice[i].SystemEntryDate,
				TransactionID: SalesInvoices.Invoice[i].TransactionID,
				CustomerID: SalesInvoices.Invoice[i].CustomerID,
				ShipTo: SalesInvoices.Invoice[i].ShipTo,
				ShipFrom: SalesInvoices.Invoice[i].ShipFrom,
				MovementEndTime: SalesInvoices.Invoice[i].MovementEndTime,
				MovementStartTime: SalesInvoices.Invoice[i].MovementStartTime,
				DocumentTotals: SalesInvoices.Invoice[i].DocumentTotals,
				WithholdingTax: SalesInvoices.Invoice[i].WithholdingTax,
				FiscalYear:FiscalYear
			};
			const invoiceData = await InvoiceSchema.create(invoice).then((dados) => {
				LinesInvoice(dados._id, SalesInvoices.Invoice[i].Line,FiscalYear);
				return dados;
			});
		}

	var MovementOfGoods = jsonObj.AuditFile.SourceDocuments.MovementOfGoods;
	if(MovementOfGoods){
    var MovementOfGoodsObj={
      NumberOfMovementLines: MovementOfGoods.NumberOfMovementLines,
	  TotalQuantityIssued: MovementOfGoods.TotalQuantityIssued,
	  FiscalYear:FiscalYear
    }
    const MovementOfGoodsData =await MovementOfGoodsSchema.create(MovementOfGoodsObj).then((dados) => {
      return dados;
	});
		for (let i = 0; i < parseInt(MovementOfGoods.NumberOfMovementLines); i++) {
			stockMovement = {
				DocumentNumber: MovementOfGoods.StockMovement[i].DocumentNumber,
				Atcud: MovementOfGoods.StockMovement[i].Atcud,
				DocumentStatus: MovementOfGoods.StockMovement[i].DocumentStatus,
				Hash: MovementOfGoods.StockMovement[i].Hash,
				HashControl: MovementOfGoods.StockMovement[i].HashControl,
				Period: MovementOfGoods.StockMovement[i].Period,
				MovementDate: MovementOfGoods.StockMovement[i].MovementDate,
				MovementType: MovementOfGoods.StockMovement[i].MovementType,
				SourceID: MovementOfGoods.StockMovement[i].SourceID,
				EacCode: MovementOfGoods.StockMovement[i].EacCode,
				SystemEntryDate: MovementOfGoods.StockMovement[i].SystemEntryDate,
				TransactionID: MovementOfGoods.StockMovement[i].TransactionID,
				CustomerID: MovementOfGoods.StockMovement[i].CustomerID,
				SupplierID: MovementOfGoods.StockMovement[i].SupplierID,
				MovementComments: MovementOfGoods.StockMovement[i].MovementComments,
				ShipTo: MovementOfGoods.StockMovement[i].ShipTo,
				ShipFrom: MovementOfGoods.StockMovement[i].ShipFrom,
				MovementEndTime: MovementOfGoods.StockMovement[i].MovementEndTime,
				MovementStartTime: MovementOfGoods.StockMovement[i].MovementStartTime,
				DocumentTotals: MovementOfGoods.StockMovement[i].DocumentTotals,
				FiscalYear:FiscalYear
			};
			const stockMovementData = await StockMovementSchema.create(stockMovement).then((dados) => {
				LinesStockMovement(dados._id, MovementOfGoods.StockMovement[i].Line,FiscalYear);
				return dados;
			});
		}
	}
		var WorkingDocuments = jsonObj.AuditFile.SourceDocuments.WorkingDocuments;
    if (WorkingDocuments){
    var WorkingDocumentsObj={
      NumberOfEntries: WorkingDocuments.NumberOfEntries,
            TotalDebit: WorkingDocuments.TotalDebit,
            TotalCredit: WorkingDocuments.TotalCredit
    }
    const WorkingDocumentsData = await WorkingDocumentsSchema.create(WorkingDocumentsObj).then((dados) => {
      return dados;
    });
			for (let i = 0; i < parseInt(WorkingDocuments.NumberOfEntries); i++) {
				workDocument = {
					PaymentRefNo: WorkingDocuments.WorkDocument[i].PaymentRefNo,
					Atcud: WorkingDocuments.WorkDocument[i].Atcud,
					Period: WorkingDocuments.WorkDocument[i].Period,
					TransactionID: WorkingDocuments.WorkDocument[i].TransactionID,
					TransactionDate: WorkingDocuments.WorkDocument[i].TransactionDate,
					PaymentType: WorkingDocuments.WorkDocument[i].PaymentType,
					Description: WorkingDocuments.WorkDocument[i].Description,
					SystemID: WorkingDocuments.WorkDocument[i].SystemID,
					DocumentStatus: WorkingDocuments.WorkDocument[i].DocumentStatus,
					PaymentMethod: WorkingDocuments.WorkDocument[i].PaymentMethod,
					SourceID: WorkingDocuments.WorkDocument[i].SourceID,
					SystemEntryDate: WorkingDocuments.WorkDocument[i].SystemEntryDate,
					CustomerID: WorkingDocuments.WorkDocument[i].CustomerID,
					Line: WorkingDocuments.WorkDocument[i].Line,
					DocumentsTotals: WorkingDocuments.WorkDocument[i].DocumentsTotals,
					WithholdingTax: WorkingDocuments.WorkDocument[i].WithholdingTax,
				};
				const workDocumentData = await WorkDocumentSchema.create(workDocument).then((dados) => {
					LinesWorkDocument(dados._id, WorkingDocuments.WorkDocument[i].Line);
					return dados;
				});
			}}

		var Payments = jsonObj.AuditFile.SourceDocuments.Payments;
		if (Payments){
      var PaymentsObj={
        NumberOfEntries: Payments.NumberOfEntries,
              TotalDebit: Payments.TotalDebit,
			  TotalCredit: Payments.TotalCredit,
			  FiscalYear:FiscalYear
      }
      const PaymentsData = await PaymentsSchema.create(PaymentsObj).then((dados) => {
        return dados;
      });
			for (let i = 0; i < parseInt(Payments.NumberOfEntries); i++) {
				payment = {
					PaymentRefNo: Payments.Payment[i].PaymentRefNo,
					Atcud: Payments.Payment[i].Atcud,
					Period: Payments.Payment[i].Period,
					TransactionID: Payments.Payment[i].TransactionID,
					TransactionDate: Payments.Payment[i].TransactionDate,
					PaymentType: Payments.Payment[i].PaymentType,
					Description: Payments.Payment[i].Description,
					SystemID: Payments.Payment[i].SystemID,
					DocumentStatus: Payments.Payment[i].DocumentStatus,
					PaymentMethod: Payments.Payment[i].PaymentMethod,
					SourceID: Payments.Payment[i].SourceID,
					SystemEntryDate: Payments.Payment[i].SystemEntryDate,
					CustomerID: Payments.Payment[i].CustomerID,
					Line: Payments.Payment[i].Line,
					DocumentsTotals: Payments.Payment[i].DocumentsTotals,
					WithholdingTax: Payments.Payment[i].WithholdingTax,
				};
				const paymentData = await PaymentSchema.create(payment).then((dados) => {
					LinesPayment(dados._id, Payments.Payment[i].Line,FiscalYear);
					return dados;
				});
      }
    }
    var Journals = jsonObj.AuditFile.GeneralLedgerEntries.Journal;
		if (Journals.length)
			for (let i = 0; i < Journals.length; i++) {
        
				journal = {
					JournalID: Journals[i].JournalID,
					Description: Journals[i].Description,
				};
				const journalData = await JournalSchema.create(journal).then((dados) => {
					//Criar Journal
					LinesTransaction(dados._id,Journals[i].Transaction,FiscalYear);
					return dados;
				});
			}
	});
});

const LinesTransaction =async function (id , Lines,FiscalYear) { //ID journal
  if (Lines.length)
    for (let i = 0; i < Lines.length; i++) {
      transaction = {
        TransactionID : Lines[i].TransactionID,
        Period: Lines[i].Period,
        TransactionDate: Lines[i].TransactionDate,
        SourceID: Lines[i].SourceID,
        Description: Lines[i].Description,
        DocArchivalNumber: Lines[i].DocArchivalNumber,
        TransactionType: Lines[i].TransactionType,
		GlPostingDate: Lines[i].GlPostingDate,
		FiscalYear:FiscalYear,
        Lines:{}
      }
      TransactionSchema.create(transaction, async function (err, dados) { 
        LinesDebitLine(dados._id,Lines[i].Lines.DebitLine);
        LinesCreditLine(dados._id,Lines[i].Lines.CreditLine);
        return dados;
      })

    }
    else {
      transaction = {
        TransactionID : Lines.TransactionID,
        Period: Lines.Period,
        TransactionDate: Lines.TransactionDate,
        SourceID: Lines.SourceID,
        Description: Lines.Description,
        DocArchivalNumber: Lines.DocArchivalNumber,
        TransactionType: Lines.TransactionType,
		GlPostingDate: Lines.GlPostingDate,
		FiscalYear:FiscalYear,
        Lines:{}
      }
      TransactionSchema.create(transaction, async function (err, dados) {
        LinesDebitLine(dados._id,Lines.Lines.DebitLine);
        LinesCreditLine(dados._id,Lines.Lines.CreditLine);
        return dados;
      })

    }
  };
  const LinesDebitLine = function (id , Lines) {
    if (Lines.length){
      for (let j = 0; j < Lines.length; j++) {
       DebitLineSchema.create(Lines[j], async function (err, data) {
        const ola = await TransactionSchema.findOneAndUpdate(
          { _id: id },
          { $push: { "Lines.DebitLine": data._id } },
          { new: true, useFindAndModify: false }
          );
      });

     }
   }
   else{
   DebitLineSchema.create(Lines, async function (err, data) {
    const ola = await TransactionSchema.findOneAndUpdate(
      { _id: id },
      { $push: { "Lines.DebitLine": data._id } },
      { new: true, useFindAndModify: false }
      );
  });
 }
};
const LinesCreditLine  = function (id , Lines) {
  if (Lines.length){
    for (let j = 0; j < Lines.length; j++) {
     CreditLineSchema.create(Lines[j], async function (err, data) {
      const ola = await TransactionSchema.findOneAndUpdate(
        { _id: id },
        { $push: { "Lines.CreditLine": data._id } },
        { new: true, useFindAndModify: false }
        );
    });
   }
 }else{
   CreditLineSchema.create(Lines, async function (err, data) {
    const ola = await TransactionSchema.findOneAndUpdate(
      { _id: id },
      { $push: { "Lines.CreditLine": data._id } },
      { new: true, useFindAndModify: false }
      );
  });
 }
}

const LinesInvoice = function (id, Lines,FiscalYear) {
	if (Lines.length)
		for (let j = 0; j < Lines.length; j++) {
			LineSchema.create(Lines[j], async function (err, data) {
				const ola = await LineSchema.findOneAndUpdate(
					{ _id: data._id },
					{InvoiceId: id,FiscalYear:FiscalYear },
					{ new: true, useFindAndModify: false }
				);
			});
		}
	else {
		LineSchema.create(Lines, async function (err, data) {
			const ola = await LineSchema.findOneAndUpdate(
				{ _id: data._id },
				{InvoiceId: id,FiscalYear:FiscalYear },
				{ new: true, useFindAndModify: false }
			);
		});
	}
};
const LinesStockMovement = function (id, Lines,FiscalYear) {
	if (Lines.length)
		for (let j = 0; j < Lines.length; j++) {
			LineSchema.create(Lines[j], async function (err, data) {
				const ola = await LineSchema.findOneAndUpdate(
					{ _id: data._id },
					{StockMovementId: id,FiscalYear:FiscalYear },
					{ new: true, useFindAndModify: false }
				);
			});
		}
	else {
		LineSchema.create(Lines, async function (err, data) {
			const ola = await LineSchema.findOneAndUpdate(
				{ _id: data._id },
				{StockMovementId: id,FiscalYear:FiscalYear },
				{ new: true, useFindAndModify: false }
			);
		});
	}
};
const LinesWorkDocument = function (id, Lines,FiscalYear) {
	if (Lines.length)
		for (let j = 0; j < Lines.length; j++) {
			LineSchema.create(Lines[j], async function (err, data) {
				const ola = await LineSchema.findOneAndUpdate(
					{ _id: data._id },
					{ WorkDocumentId: id,FiscalYear:FiscalYear },
					{ new: true, useFindAndModify: false }
				);
			});
		}
	else {
		LineSchema.create(Lines, async function (err, data) {
			const ola = await LineSchema.findOneAndUpdate(
				{ _id: data._id },
					{ WorkDocumentId: id,FiscalYear:FiscalYear },
				{ new: true, useFindAndModify: false }
			);
		});
	}
};

const LinesPayment = function (id, Lines,FiscalYear) {
	if (Lines.length)
		for (let j = 0; j < Lines.length; j++) {
			LineSchema.create(Lines[j], async function (err, data) {
				const ola = await LineSchema.findOneAndUpdate(
					{ _id: data._id },
					{ PaymentId: id ,FiscalYear:FiscalYear },
					{ new: true, useFindAndModify: false }
				);
			});
		}
	else {
		LineSchema.create(Lines, async function (err, data) {
			const ola = await LineSchema.findOneAndUpdate(
				{ _id: data._id },
				{ PaymentId: id ,FiscalYear:FiscalYear },
				{ new: true, useFindAndModify: false }
			);
		});
	}
};
module.exports = router;
