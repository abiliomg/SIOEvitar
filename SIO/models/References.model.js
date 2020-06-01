var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReferencesSchema = new Schema({
    Reference: {type:String},
    Reason: {type: String}
});

module.exports=mongoose.model('References', ReferencesSchema);