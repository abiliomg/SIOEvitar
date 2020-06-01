var express = require ('express');
var router = express.Router();
var CustomsInformationController = require("../controllers/CustomsInformation.controller.js");
 
router.get('/', CustomsInformationController.getAllCustomsInformation);
 
module.exports = router;