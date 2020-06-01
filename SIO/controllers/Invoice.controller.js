var mongoose = require("mongoose");
var Invoice = require("../models/Invoice.model");
 

var InvoiceController = {};
 
InvoiceController.getAllInvoice =async function (req, res, next) {
    const all=function(){return Invoice.find().populate("Line","-_id -__v")}
    let retorna=await all();
    res.json(retorna);
};
 
module.exports = InvoiceController;