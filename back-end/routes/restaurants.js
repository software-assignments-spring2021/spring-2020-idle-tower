const express = require("express");
const router = express.Router();
// const axios = require("axios");
const BusinessModel = require("../models/Business");

// GET route for restaurants
router.get("/list", (req, res) => {
  BusinessModel.find((err, list) => {
    console.log(err, list);
    if (err) {
      return res.json({confirmation: 'fail', error: err});
    }
    return res.json({
      confirmation: 'success',
      data: list
    });

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
