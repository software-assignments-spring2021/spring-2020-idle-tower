import React, { useContext, useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { UserContext } from './user-context.js'

export default (props) => {
  const start_login_link = (
    <Link to="/login" className="menu-item">
      Login
    </Link>
  )
  const start_signup_link = (
    <Link to="/signup" className="menu-item">
      Sign Up
    </Link>
  )
  const start_logout_link = (
    <Link to="/logout" className="menu-item">
      Logout
    </Link>
  )
  const [userState] = useContext(UserContext);
  let [login_link, set_login_link] = useState(start_login_link);
  let [signup_link, set_signup_link] = useState(start_signup_link);;
  let [logout_link, set_logout_link]= useState(start_logout_link);

  useEffect(() => {
    if (!userState['logged-in'] === false) {
      set_login_link(
        <Link to="/login" className="menu-item">
          Login
        </Link>
      )
      set_signup_link(
        <Link to="/signup" className="menu-item">
          Sign Up
        </Link>
      )
      set_logout_link(null);
    } else {
      set_login_link(null);
      set_signup_link(null);

      set_logout_link(
        <Link to="/logout" className="menu-item">
          Logout
        </Link>
      )
    }
  }, [userState]);

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
