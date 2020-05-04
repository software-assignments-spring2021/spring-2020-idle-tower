const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const BusinessSchema = new Schema({
    "business_id":{
        type: String,
        required: true
    },
    "name": {
        type: String,
        required: true,
    },
    "address" :{
        type: String,
        required: true,
    },
    "city":{
        type: String,
        required: true,
    },
    "stars":{
        type: Number,
        required: true,
    },
    "is_open":{
        type: Number,
        required: true,
    },
    "categories":{
        type: [String],
        required: true,
    },
    "food_check_score" :{
        type: Number,
        required: true,
    },
    "dollar_sign" :{
        type: Number,
        required: true,
    },
    "review_count":{
        type: Number,
        required: true

    }
    
    //amenities 
    

    
});

const BusinessModel = mongoose.model("business", BusinessSchema);

module.exports = BusinessModel;