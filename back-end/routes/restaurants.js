const express = require("express");
const router = express.Router();
// const axios = require("axios");
const Business = require("../models/Business")

// GET route for restaurants
router.get("/list", (req, res) => {
  Business.find(
    { $or :
    [{ city : "New York"},{dollar_sign : {$lt : 4}},]})
    .then( list => {
      res.json({
        confirmation: 'success',
        data: list
      })
    })
    .catch (err => {
      confirmation: 'fail'
    })

  // axios
  //   .get("https://my.api.mockaroo.com/list_restaurants.json?key=552a1800")
  //   .then((response) => {
  //     res.send(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
});

module.exports = router;
