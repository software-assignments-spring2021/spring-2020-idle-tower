import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

export default (props) => {
  const login_link = (
    <Link to="/login" className="menu-item">
      Login
    </Link>
  );
  const signup_link = (
    <Link to="/signup" className="menu-item">
      Sign Up
    </Link>
  );
  const logout_link = (
    <Link to="/logout" className="menu-item">
      Logout
    </Link>
  );

  return (
    // Pass on our props
    <Menu {...props}>
      <Link to="/" className="menu-item">
        Home
      </Link>
      { login_link }
      { signup_link }
      <Link to="/market-research" className="menu-item">
        Market Research
      </Link>
      { logout_link }
    </Menu>
  );
};
