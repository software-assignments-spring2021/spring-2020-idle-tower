const express = require("express");
const router = require('express').router();
const axios = require("axios");


//mockaroo data object
const searchData = () => {
    try {
        return axios.get('https://my.api.mockaroo.com/business.json?key=48c08110')
    } catch (error) {
        console.log(error);

    }
}
let searchResult = [];
const category = searchData.category;


router.get("/search", function(req,res){


    for (let i = 0; i<searchData.length; i++){
        for (let j=0; j<searchData[i].category.length; j++){
            if (searchData[i].category[j] === req.param.id){
                if(! searchResult.include(searchData[i]) ){
                    searchResult.push(searchData[i]);
                }
            }
        }
    }

    res.send(searchResult);
    // if (req.query.search){
    //     //get relevant search results
    //     const regex = new RegExp(escapeRegex(req.query.search), 'gi');
    //     // get results from db 
    //     res.send()


    // } else {
    //     //get top restaurants around

    // }

});

//for fuzzy search
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};