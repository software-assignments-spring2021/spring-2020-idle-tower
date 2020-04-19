import React from 'react';
import './login.scss';

import Notification from './notification.js';

const Login = (props) => (
  <div className="Login">
    <Notification text={props.notificationText} error={props.error} />
    <h1>Testing</h1>
    <form action="" method="" acceptCharset="utf-8">
      <label>
        Username:
        {' '}
        <input type="text" name="username" />
      </label>
      <label>
        Password:
        {' '}
        <input type="password" name="password" />
      </label>
      <input type="submit" name="submit" value="Submit" />
    </form>
  </div>
);

export default Login;
