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



//Compeitors 
router.get("/list2", (req, res) => {
  BusinessModel.find({city:"Phoenix"}, (err,list2) => {
    console.log(err, list2);
    if (err) {
      return res.json({
        confirmation: "fail", 
        error: err
      });
    }
    return res.json({
      confirmation: 'success',
      data: list2
    })


    });
})

module.exports = router;
