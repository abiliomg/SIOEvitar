var mongoose = require("mongoose");
var MovementOfGoods = require("../models/MovementOfGoods.model");
 

var MovementOfGoodsController = {};
 
MovementOfGoodsController.getAllMovementOfGoods = function (req, res, next) {
    MovementOfGoods.find(function (err, movementOfGoods) {
        if (err) {
            next(err);
        } else {
            res.json(movementOfGoods);
        }
    });
};
 
module.exports = MovementOfGoodsController;