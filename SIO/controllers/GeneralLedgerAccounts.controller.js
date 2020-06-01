var mongoose = require("mongoose");
var GeneralLedgerAccounts = require("../models/GeneralLedgerAccounts.model");
 

var GeneralLedgerAccountsController = {};
 
GeneralLedgerAccountsController.getAllGeneralLedgerAccounts = function (req, res, next) {
    GeneralLedgerAccounts.find(function (err, generalLedgerAccounts) {
        if (err) {
            next(err);
        } else {
            res.json(generalLedgerAccounts);
        }
    });
};
 
module.exports = GeneralLedgerAccountsController;