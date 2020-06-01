var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CurrencySchema= new Schema({


     CurrencyCode:{type:String},
     CurrencyAmount: {type:Number},
     ExchangeRate: {type:Number}

});

module.exports=mongoose.model('Currency', CurrencySchema);
