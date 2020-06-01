var mongoose = require("mongoose");
var References = require("../models/References.model");

var ReferencesController = {};


ReferencesController.getAllReferences = function (req, res, next) {
    References.find(function (err, references) {
        if (err) {
            next(err);
        } else {
            res.json(references);
        }
    });
};

module.exports = ReferencesController;