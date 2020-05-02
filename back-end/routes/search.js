const express = require("express");
const router = express.Router();
const axios = require("axios");
// import SearchSchema from "../models/Search.js"


//mockaroo data object
const searchData = () => {
  try {
    return axios.get("https://my.api.mockaroo.com/business.json?key=48c08110");
  } catch (error) {
    console.log(error);
  }
};
let searchResultArray = [];
let searchResult = { searchResults: searchResultArray };
const category = searchData.category;

//for fuzzy search
function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

router.get("/search", function(req, res) {
  SearchSchema.find(
    {
      cuisine: req.query,
      distance: {$gte: 10}
    })

  });

  // res.json(searchResult);
  // if (req.query.search){
  //     //get relevant search results
  //     const regex = new RegExp(escapeRegex(req.query.search), 'gi');
  //     // get results from db
  //     res.send()

  // } else {
  //     //get top restaurants around

  // }


module.exports = router;
