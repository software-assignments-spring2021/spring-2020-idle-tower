import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./signup.scss";
import { Link } from "react-router-dom";
import validator from "validator";
import Notification from "./notification-signup.js";
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Signup extends Component {

  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info' :
          NotificationManager.info ("Please fill in the form to sign up.");
          break;
        
        case 'errorEmail' :
          NotificationManager.errorEmail ("Enter a valid email");
          break;
        case 'errorPassword':
          NotificationManager.errorPassword ("Passwords must match");
          break;
      };
    };

  };
  
  validate_email = (email) =>{
    if (validator.isEmail(email)){
    }
    else{
      console.log('fao')
    }
  }

render(){
  return (
    <div className="Signup">

      <NotificationContainer />
      
      <div class = "info">{this.createNotification.info}</div>
        
      <h2>Signup</h2>
      <form action="/post-signup" method="POST" acceptCharset="utf-8">
        <label>
          Username: <input type="text" name="username" />
        </label>
        <label>
          Email: <input type="password" name="email" />
        </label>
        <label>
          Password: <input type="password" name="password" />
        </label>
        <label>
          Confirm Password: <input type="password" name="confirm_password" />
        </label>
        <button type="submit" name="submit" value="Submit"  onClick = {this.validate_email('asf')}> Submit </button>
      </form>
      <br />
      <p>Already a member?</p>
      <Link to="/login" id="login_link">
        Login
      </Link>
    </div>
  );
}
};

/* Signup.propTypes = {
  notificationText: PropTypes.string,
  error: PropTypes.string,
}; */
export default Signup;
