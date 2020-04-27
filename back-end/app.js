const express = require("express");
const mongoose = require("mongoose");
const db = require('./db');


// connect to db
mongoose.connect(db.dbconf, db.config);



const app = express();
module.exports = app;

// middleware
const bodyParser = require("body-parser"); // parse incoming HTTP POST data
const multer = require("multer"); // handle HTTP POST with file uploads
const axios = require("axios"); // making request to API
const morgan = require("morgan"); // logging HTTP requests
const cors = require('cors'); // allow Cross Site Requests
const passport = require('passport'); // auth

// Import constants
const CONSTANTS = require("./_constants");

app.use(cors({
  origin: CONSTANTS.FRONTEND_URL
}));

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// get config
let secret;
let port;
let url;
if (process.env.NODE_ENV === 'PRODUCTION') {
	// if we're in PRODUCTION mode, then read the configration from a file
	// use blocking file io to do this...
	const fs = require('fs');
	const path = require('path');
	const fn = path.join(__dirname, '../config.json');
	const data = fs.readFileSync(fn);

	// our configuration file will be in json, so parse it and set the
	// conenction string appropriately!
	const conf = JSON.parse(data);
	secret = conf.sessionSecret;
	port = conf.port;
	url = conf.url;
} else {
	// if we're not in PRODUCTION mode, then use
	secret = '12345678910';
	port = 3000;
	url = 'http://localhost';
}

// Setup Passport
// https://code.tutsplus.com/tutorials/authenticating-nodejs-applications-with-passport--cms-21619
app.use(passport.initialize());
app.use(passport.session());

const initPassport = require('./passport/init');
initPassport(passport);


// Routes
const indexRoutes = require('./routes/index')
const userRoutes = require('./routes/user')
const authRoutes = require('./routes/auth');
const signupRoutes = require('./routes/signup')
const searchRoutes = require('./routes/search')

app.use('/', indexRoutes);
app.use('/user', userRoutes);
app.use('/auth', authRoutes);
app.use('/signup', signupRoutes);
app.use('/search', searchRoutes);


module.exports = app;
