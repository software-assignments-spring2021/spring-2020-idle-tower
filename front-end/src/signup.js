import React, { Component } from "react";
import "./signup.scss";
import { Link } from "react-router-dom";
import validator from "validator";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { BACKEND_URL } from './_constants';
import { postData } from './_helpers';


const Signup = (props) => {

  // create account request 
  const createUser = () => {
    const bodyData = {username: "asdf", email:"asd", password :"fff"};
    postData(BACKEND_URL + '/signup/add-user',bodyData);
  };


  const createNotification = (type) => {
    return () => {
      switch (type) {
        default:
          
        break;
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
  
  const validate_email = (email) =>{
    if (validator.isEmail(email)){
    }
    else{
      console.log('fao')
    }
  }

  return (
    <div className="Signup">

      
        
      <h2>Signup</h2>
      <form action="/signup" method="POST" acceptCharset="utf-8">
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
        <button id = "submit" action = {createUser}>Submit</button>
      </form>
      
      <br />
      <p>Already a member?</p>
      <Link to="/login" id="login_link">
        Login
      </Link>
    </div>
  );
}


/* Signup.propTypes = {
  notificationText: PropTypes.string,
  error: PropTypes.string,
}; */
export default Signup;
