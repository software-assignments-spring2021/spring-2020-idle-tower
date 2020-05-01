const express = require('express');
const passport = require('passport');

const router = express.Router();
const axios = require('axios');
const UserModel = require('../models/User');


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
        console.log(err2, modifiedUser);
        if (err2) {
          res.json({ error: err2 });
        }
        res.json({ message: 'Restaurant successfully saved.', user: modifiedUser });
      });
    });
  });


// POST /remove-restaurant
router.post('/remove-restaurant', (req, res) => {
  const restaurantId = req.body.business_id;

  // TODO: remove restaurantId from user's saved_restaurants list
  // req.user.markModified('saved_restaurants');
  // req.user.save(function(err, modifiedUser) {
  //  console.log(err, modifiedUser);
  // });

  axios.post('https://my.api.mockaroo.com/user_save-restaurant.json?key=71f47770', {
    restaurantId,
  })
    .then((response) => {
      const err = response.data.error;
      sendData(res, restaurantId, err, true);
    })
    .catch((error) => {
      console.log('error: ', error);
    });
});


module.exports = router;
