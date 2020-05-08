const express = require("express");
const router = express.Router();
// const axios = require("axios");
const BusinessModel = require("../models/Business");

// GET route for restaurants
router.get("/list", (req, res) => {
  BusinessModel.find((err, list) => {
    if (err) {
      console.log("error", err);
      return res.json({confirmation: 'fail', error: err});
    }
    
    return res.status(200).json({
      confirmation: 'success',
      data: list
    });

  })

});


module.exports = router;
