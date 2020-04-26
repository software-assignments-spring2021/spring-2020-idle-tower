const mongoose = require('mongoose');

const List = require('./List');

const User = new mongoose.Schema({
	username: {type: String, required: true},
	password: {type: String, required: true},
	saved_restaurants: [List.ListSchema]
});

module.exports = {
	UserModel: mongoose.model('User', User),
	UserSchema: User
};