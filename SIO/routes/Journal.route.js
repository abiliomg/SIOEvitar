var express = require ('express');
var router = express.Router();
var JournalController = require("../controllers/Journal.controller.js");


router.get('/', JournalController.getAllJournal);
module.exports = router;