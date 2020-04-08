import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
import Login from "./login.js";
import Signup from "./signup.js";

export default function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>FoodCheck Header</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to = "/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <div>Home</div>
          </Route>
          <Route path="/login">
            <Login
              notificationText="Welcome to FoodCheck! Please login"
              error="Invalid credentials"
            />
          </Route>
          <Route path = "/signup">
            <Signup
              notificationText="Please Sign Up"
              error="Invalid credentials"
            />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
