var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderReferencesSchema = new Schema({
    OriginatingON: {type:String},
    OrderDate: {type:Date}
  
});

module.exports=mongoose.model('OrderReferences', OrderReferencesSchema);