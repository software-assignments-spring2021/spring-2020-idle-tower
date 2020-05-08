const express = require("express");
const router = express.Router();
const axios = require("axios");

// GET route for restaurants
router.get("/list", (req, res) => {
  axios
    .get("https://my.api.mockaroo.com/list_restaurants.json?key=552a1800")
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});


module.exports = router;
