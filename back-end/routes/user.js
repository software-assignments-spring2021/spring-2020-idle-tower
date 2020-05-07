const express = require('express');
const passport = require('passport');

const router = express.Router();
const axios = require('axios');
const UserModel = require('../models/User');
const BusinessModel = require('../models/Business');


function sendData(res, restaurantId, error, remove = false) {
  const data = { error };
  if (remove) {
    if (error) {
      data.message = `Could not remove restaurant ${restaurantId} from user's saved_restaurants list.`;
    } else {
      data.message = `Successfully removed restaurant ${restaurantId} from user's saved_restaurants list.`;
    }
  } else if (error) {
    data.message = `Could not save restaurant ${restaurantId} to user's saved_restaurants list.`;
  } else {
    data.message = `Successfully saved restaurant ${restaurantId} to user's saved_restaurants list.`;
  }
  res.json(data);
}


// POST /save-restaurant
router.post('/save-restaurant',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const restaurantId = req.body.business_id;

    // TODO: save restaurantId to user's saved_restaurants list
    UserModel.findOne({ _id: req.user._id }, (err, user) => {
      user.saved_restaurants.addToSet(restaurantId);
      user.markModified('saved_restaurants');
      user.save((err2, modifiedUser) => {
        if (err2) {
          res.json({ error: err2 });
        }
        res.json({ message: 'Restaurant successfully saved.', user: modifiedUser });
      });
    });
  }
);


// POST /remove-restaurant
router.post('/remove-restaurant',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const restaurantId = req.body.business_id;

    UserModel.findOne({ _id: req.user._id }, (err, user) => {
      user.saved_restaurants.pull(restaurantId);
      user.markModified('saved_restaurants');
      user.save((err2, modifiedUser) => {
        if (err2) {
          res.json({ error: err2 });
        }
        res.json({ message: 'Restaurant successfully removed.', user: modifiedUser });
      });
    });
  }
);

// POST /list-saved-restaurants
router.post('/list-saved-restaurants',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

    UserModel.findOne({ _id: req.user._id }, (err, user) => {
      if (err) {
        console.log("bbb", err);
        return res.json({ "error": err});
      }
      console.log(user.saved_restaurants);

      BusinessModel.find({business_id: {$in: user.saved_restaurants}}, (err, businesses) => {
        if (err) {
          console.log("bbb", err);
          return res.json({ "error": err});
        }
        console.log("bbb", businesses);
        return res.json(businesses);
      });

    });
  }
);

module.exports = router;
