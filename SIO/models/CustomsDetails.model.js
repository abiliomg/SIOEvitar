var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CustomsDetailsSchema= new Schema({


   CnCode: {type:String},
    UnNumber: {type:String}

});  

module.exports=mongoose.model('CustomsDetails', CustomsDetailsSchema);