const mongoose = require("mongoose");

const  Schema = mongoose.Schema;

const SearchSchema = new Schema({
    cuisine: {
        type:String,
        required: true},
    distance: Number  
});

const SearchSchema =  mongoose.model('searchOject', SearchSchema);

module.exports = SearchSchema;