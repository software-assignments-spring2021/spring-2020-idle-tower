const express = require("express");
const app = express();
module.exports = app;

// middleware
const bodyParser = require("body-parser"); // parse incoming HTTP POST data
const multer = require("multer"); // handle HTTP POST with file uploads
const axios = require("axios"); // making request to API
const morgan = require("morgan"); // logging HTTP requests

app.use(morgan("dev"));


// Routes
const indexRoutes = require('./routes/index')
app.use('/', indexRoutes);


module.exports = app;