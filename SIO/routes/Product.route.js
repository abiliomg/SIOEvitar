var express = require ('express');
var router = express.Router();
var ProductController = require("../controllers/Product.controller.js");


router.get('/', ProductController.getAllProduct);

module.exports = router;