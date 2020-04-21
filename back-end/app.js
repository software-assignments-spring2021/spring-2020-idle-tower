const express = require("express");
const app = express();
module.exports = app;

// middleware
const bodyParser = require("body-parser"); // parse incoming HTTP POST data
const multer = require("multer"); // handle HTTP POST with file uploads
const axios = require("axios"); // making request to API
const morgan = require("morgan"); // logging HTTP requests
const cors = require('cors'); // allow Cross Site Requests

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));


// Routes
const indexRoutes = require('./routes/index')
const userRoutes = require('./routes/user')

app.use('/', indexRoutes);
app.use('/user', userRoutes);

module.exports = app;