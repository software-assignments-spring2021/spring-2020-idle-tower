const login = require('./login');
const register = require('./register');
const User = require('../models/User');

module.exports = function(passport){

	// Passport needs to be able to serialize and deserialize users to support persistent login sessions
	passport.serializeUser(function(user, done) {
		console.log('serializing user:\n', user);
		done(null, user._id);
	});

	passport.deserializeUser(function(id, done) {
		User.UserModel.findById(id, function(err, user) {
			console.log('deserializing user:\n', user);
			done(err, user);
		});
	});

	// Setting up Passport Strategies for Login and SignUp/Registration
	login(passport);
	register(passport);

};