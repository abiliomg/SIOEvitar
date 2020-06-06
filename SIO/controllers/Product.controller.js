var mongoose = require("mongoose");
var Product = require("../models/Product.model");

var ProductController = {};


ProductController.getAllProduct = function (req, res, next) {
    Product.aggregate(
        [{$group: {
            _id:{ProductType:"$ProductType",
            ProductCode: "$ProductCode",
            ProductGroup: "$ProductGroup",
            ProductDescription: "$ProductDescription",
            ProductNumberCode: "$ProductNumberCode"
        }
		  }}],   
        function (err, products) {
        if (err) {
            next(err);
        } else {
            res.json(products);
        }
    });
};

module.exports = ProductController;