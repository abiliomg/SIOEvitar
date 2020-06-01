var express = require ('express');
var router = express.Router();
var CustomsDetailsController = require("../controllers/CustomsDetails.controller.js");
 
router.get('/', CustomsDetailsController.getAllCustomsDetails);
 
module.exports = router;