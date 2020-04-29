import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { UserContext } from './user-context.js';
import { BACKEND_URL } from './_constants';
import { postData } from './_helpers';

import './login.scss';

import Notification from './notification';

const Login = (props) => {
  const [userState, setUserState] = useContext(UserContext);
  const [notificationEl, setNotificationEl] = useState(<Notification text="Please login" error="" />);

  const submitLogin = (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const bodyData = { email: email, password: password };
    postData(BACKEND_URL + '/auth/login', bodyData)
      .then((res) => {
        if (!res.error) {
          console.log(res);
          const newUserState = userState;
          newUserState['logged-in'] = true;
          setUserState(newUserState);

          // TODO: save JWT token in local storage
          // TODO: redirect to dashboard page
        } else {
          console.log("error!!");
          setNotificationEl(<Notification text="Please login" error="Error loging in. Please try again" />);
        }
      });
  }

  return (
    <div className="Login">
      <h2>Login</h2>
      {notificationEl}
      <form action="" method="" acceptCharset="utf-8">
        <label htmlFor="email">
          Username:
          <input type="text" name="email" id="email" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" name="password" id="password" />
        </label>
        <input type="submit" name="submit" value="Submit" onClick={submitLogin} />
      </form>
      <br/>
      <p>New user?</p>
      <Link to="/signup" id="signup-link">
        Signup Now!
      </Link>
    </div>
  );
};

export default Login;
