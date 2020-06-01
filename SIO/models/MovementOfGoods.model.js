var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MovementOfGoodsSchema = new Schema({
    NumberOfMovementLines: {type:Number},
    TotalQuantityIssued: {type:Number},
    FiscalYear: {type:Number}
  
});

module.exports=mongoose.model('MovementOfGoods', MovementOfGoodsSchema);