var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CustomsInformationSchema= new Schema({


     ArcNo: {type:String},
    IecAmount: {type:Number}

});

module.exports=mongoose.model('CustomsInformation', CustomsInformationSchema);