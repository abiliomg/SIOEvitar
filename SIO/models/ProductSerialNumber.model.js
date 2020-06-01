var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSerialNumberSchema = new Schema({
    SerialNumber: [{type:String}]
});

module.exports=mongoose.model('ProductSerialNumber', ProductSerialNumberSchema);