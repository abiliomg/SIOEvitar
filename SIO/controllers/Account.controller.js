var mongoose = require("mongoose");
var Account = require("../models/Account.model");
 
var AccountController = {};
 
AccountController.getAllAccount = function (req, res, next) {
    Account.find(function (err, account) {
        if (err) {
            next(err);
        } else {
            res.json(account);
        }
    });
};
 
module.exports = AccountController;