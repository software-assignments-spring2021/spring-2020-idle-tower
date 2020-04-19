const express = require('express');
const router = express.Router();
const axios = require('axios');

function sendData(res, restaurant_id, error) {
  const data = {'error': error};
  if (error) {
    data['message'] = `Could not save restaurant ${restaurant_id} to user's saved_restaurants list.`
  } else {
    data['message'] = `Successfully saved restaurant ${restaurant_id} to user's saved_restaurants list.`
  }
  res.json(data);
}

// POST /save-restaurant
router.post('/save-restaurant', (req, res) => {
  const restaurant_id = req.body.restaurant_id;

  // TODO: save restaurant_id to user's saved_restaurants list
  // req.user.markModified('saved_restaurants');
  // req.user.save(function(err, modifiedUser) {
  //  console.log(err, modifiedUser);
  // });

  axios.post('https://my.api.mockaroo.com/user_save-restaurant.json?key=71f47770', {
    restaurant_id: restaurant_id
  })
  .then(function (response) {
    console.log('response', response.data['error']);
    const err = response.data['error'];
    sendData(res, restaurant_id, err);
  })
  .catch(function (error) {
    console.log(error);
  });
});


module.exports = router;