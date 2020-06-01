var mongoose = require("mongoose");
var OrderReferences = require("../models/OrderReferences.model");
 

var OrderReferencesController = {};
 
OrderReferencesController.getAllOrderReferences = function (req, res, next) {
    OrderReferences.find(function (err, orderReferences) {
        if (err) {
            next(err);
        } else {
            res.json(orderReferences);
        }
    });
};
 
module.exports = OrderReferencesController;