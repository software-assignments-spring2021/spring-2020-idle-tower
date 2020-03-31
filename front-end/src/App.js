import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
import Login from "./login.js";
import ExploreNotSignedIn from "./explore-nsi.js"

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
              <Link to="/explore-nsi">Explore Not Signed In</Link>
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
          <Route exact path="/explore-nsi">
            <ExploreNotSignedIn></ExploreNotSignedIn>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}
