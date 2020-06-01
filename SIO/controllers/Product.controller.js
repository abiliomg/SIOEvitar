var mongoose = require("mongoose");
var Product = require("../models/Product.model");

var ProductController = {};


ProductController.getAllProduct = function (req, res, next) {
    Product.find(function (err, products) {
        if (err) {
            next(err);
        } else {
            res.json(products);
        }
    });
};

module.exports = ProductController;