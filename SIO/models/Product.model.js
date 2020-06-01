var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CustomsDetailsSchema = require('./CustomsDetails.model.js');
var CustomsDetails = mongoose.model('CustomsDetails').schema;

var ProductSchema = new Schema({
    ProductType: {type:String},
    ProductCode: {type: String},
    ProductGroup: {type: String},
    ProductDescription: {type:String},
    ProductNumberCode: {type: String},
    CustomsDetails: {type: CustomsDetails}
});

module.exports=mongoose.model('Product', ProductSchema);