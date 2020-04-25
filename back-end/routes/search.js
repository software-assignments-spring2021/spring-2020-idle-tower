const express = require("express");
const router = require('express').router();
const axios = require("axios");


router.get("/", function(req,res){
    axios.get("https://my.api.mockaroo.com/business.json?key=48c08110")
    
    if (req.query.search){
        //get relevant search results
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        // get results from db 


    } else {
        //get top restaurants around
    }

});

//for fuzzy search
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};