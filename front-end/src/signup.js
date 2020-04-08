import React from "react";
import "./signup.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Notification from "./notification.js";

import Login from "./login.js";

const Signup = props => {
  return (
    <div className="Signup">
      <Notification text={props.notificationText} error={props.error} />
      <h1>Signup Testing</h1>
      <form action="" method="" acceptCharset="utf-8">
        <label>
          Username: <input type="text" name="username" />
        </label>
        <br></br>
        <label>
          Password: <input type="password" name="password" />
        </label>
        <br></br>
        <label>
            Confirm Password: <input type = "password" name ="confirm_password"/>
        </label>
        <br></br>
        <input type="submit" name="submit" value="Submit" />
      </form>
      <h2> Already a memeber? </h2>
      <Link to = "/login" id = "login_link">Login</Link>

      <Switch> 
          <Route path = "/login">
              <Login notificationText = "Welcome to FoodCheck! Please Login!"/>
          </Route>
      </Switch>
    </div>
    
  );
};

export default Signup;