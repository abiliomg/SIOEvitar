var express = require ('express');
var router = express.Router();
var AccountController = require("../controllers/Account.controller.js");
 
router.get('/', AccountController.getAllAccount);
 
module.exports = router;