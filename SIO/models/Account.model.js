var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccountSchema= new Schema({
        AccountID:{type:String},
        AccountDescription:{type: String},
        OpeningDebitBalance:{type: Number},
        OpeningCreditBalance: {type: Number},
        ClosingDebitBalance:{type: Number},
        ClosingCreditBalance:{type: Number},
        GroupingCategory:{type: String},
        GroupingCode: {type:String},
        TaxonomyCode: {type: Number}
});


module.exports=mongoose.model('Account', AccountSchema);
