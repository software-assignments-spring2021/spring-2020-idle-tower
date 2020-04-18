import React, { useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { UserContext } from './user-context.js'

export default (props) => {
  const [userState] = useContext(UserContext);
  let login_link = null;
  let signup_link = null;
  let logout_link = null;
  if (!userState['logged-in']) {
    login_link = (
      <Link to="/login" className="menu-item">
        Login
      </Link>
    )
    signup_link = (
      <Link to="/signup" className="menu-item">
        Sign Up
      </Link>
    )
  } else {
    logout_link = (
      <Link to="/logout" className="menu-item">
        Logout
      </Link>
    )
  }
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
