import React from 'react';
import PropTypes from 'prop-types';
import './login.scss';

import Notification from './notification';

const Login = (props) => {
  const { notificationText, error } = props;

  return (
    <div className="Login">
      <Notification text={notificationText} error={error} />
      <h1>Testing</h1>
      <form action="" method="" acceptCharset="utf-8">
        <label htmlFor="username">
          Username:
          {' '}
          <input type="text" name="username" id="username" />
        </label>
        <label htmlFor="password">
          Password:
          {' '}
          <input type="password" name="password" id="password" />
        </label>
        <input type="submit" name="submit" value="Submit" />
      </form>
    </div>
  );
};

Login.propTypes = {
  notificationText: PropTypes.string,
  error: PropTypes.string,
};

Login.defaultProps = {
  notificationText: 'Welcome to FoodCheck! Please login',
  error: '',
};

export default Login;
