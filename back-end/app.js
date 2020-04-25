const express = require("express");
const app = express();
module.exports = app;

// middleware
const bodyParser = require("body-parser"); // parse incoming HTTP POST data
const multer = require("multer"); // handle HTTP POST with file uploads
const axios = require("axios"); // making request to API
const morgan = require("morgan"); // logging HTTP requests
const cors = require('cors'); // allow Cross Site Requests

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


// Routes
const indexRoutes = require('./routes/index')
const userRoutes = require('./routes/user')
const signupRoutes = require('./routes/signup')

app.use('/', indexRoutes);
app.use('/user', userRoutes);
app.use('/signup', signupRoutes);

module.exports = app;