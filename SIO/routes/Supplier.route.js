var express = require ('express');
var router = express.Router();
var SupplierController = require("../controllers/Supplier.controller.js");

router.get('/', SupplierController.getAllSupplier);

module.exports = router;