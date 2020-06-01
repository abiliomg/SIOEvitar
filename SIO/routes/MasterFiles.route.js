var express = require ('express');
var router = express.Router();
var MasterFilesController = require("../controllers/MasterFiles.controller.js");

router.get('/', MasterFilesController.getAllMasterFiles);
module.exports = router;