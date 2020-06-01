var express = require ('express');
var router = express.Router();
var OrderReferencesController = require("../controllers/OrderReferences.controller.js");

router.get('/', OrderReferencesController.getAllOrderReferences);
module.exports = router;