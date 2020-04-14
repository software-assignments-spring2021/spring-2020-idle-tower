import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      <Link to="/" className="menu-item">
        Home
      </Link>
      <Link to="/login" className="menu-item">
        Login
      </Link>
      <Link to="/signup" className="menu-item">
        Sign Up
      </Link>
      <Link to="/market-research" className="menu-item">
        Market Research
      </Link>
    </Menu>
  );
};
