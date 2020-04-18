const express = require('express');
const router = express.Router();

// POST /save-restaurant
router.post('/save-restaurant', (req, res) => {
	const restaurant_id = req.body.restaurant_id;
	console.log(req.body);

	// TODO: save restaurant_id to user's saved_restaurants list
	// req.user.markModified('saved_restaurants');
	// req.user.save(function(err, modifiedUser) {
	// 	console.log(err, modifiedUser);
	// });

	const err = false;
	let data = {'error': false};
	if (err) {
		data['error'] = true;
		data['message'] = "Could not save restaurant to user's saved_restaurants list."
	} else {
		data['message'] = `Successfully saved restaurant ${restaurant_id} to user's saved_restaurants list.`
	}
	res.json(data);
});

module.exports = router;