const mongoose = require('mongoose');

const User = new mongoose.Schema({
	username: {type: String, required: true},
	password: {type: String, required: true},
	saved_restaurants: [String],
});

module.exports = {
	UserModel: mongoose.model('User', User),
	UserSchema: User
};