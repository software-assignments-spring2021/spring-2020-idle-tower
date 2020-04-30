const express = require("express");
const mongoose = require("mongoose");
const db = require("./db");

// connect to db
mongoose.connect(db.dbconf, db.config);

const app = express();
module.exports = app;

// middleware
const bodyParser = require("body-parser"); // parse incoming HTTP POST data
const multer = require("multer"); // handle HTTP POST with file uploads
const axios = require("axios"); // making request to API
const morgan = require("morgan"); // logging HTTP requests
const cors = require("cors"); // allow Cross Site Requests
const passport = require("passport"); // auth

// Import constants
const CONSTANTS = require("./_constants");

app.use(
  cors({
    origin: CONSTANTS.FRONTEND_URL,
  })
);

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

require('./auth/auth');

// configure the app to use bodyParser()
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// use static folder 'static'
app.use("/static", express.static("static"));

// Routes
const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const signupRoutes = require("./routes/signup");
const searchRoutes = require("./routes/search");
const restaurantRoutes = require("./routes/restaurants");

app.use("/", indexRoutes);
app.use('/user', passport.authenticate('jwt', { session : false }), userRoutes);
app.use("/auth", authRoutes);
app.use("/signup", signupRoutes);
app.use("/search", searchRoutes);
app.use("/restaurants", restaurantRoutes);

app.use(function (req, res, next) {
  res.status(404);

  res.json({
      message: "page not found", 
      error: "404"
  });
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
      message: err.message, 
      error: err
  });
});

module.exports = app;
