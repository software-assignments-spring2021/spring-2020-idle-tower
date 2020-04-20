import React from "react";
import "./lib/reset.css";
import "./app.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UserProvider } from "./user-context.js";
// Components
import Login from "./login";
import Signup from "./signup.js";
import MarketResearchPage from './market-research-page.js'
import Restaurant_Dashboard from './restaurant-dashboard.js'
import Explore from "./explore.js"
import SideBar from "./sidebar.js";

export default function App() {
  return (
    <UserProvider>
      <div id="App">
        <Router>
          <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
          <div className="container">
            <div className="content">
              <Switch>
                <Route exact path="/">
                  <Explore isLoggedIn={false}/>
                </Route>
                <Route path="/login">
                  <Login
                    notificationText="Welcome to FoodCheck! Please login"
                    error="Invalid credentials"
                  />
                </Route>
                <Route path="/signup">
                  <Signup
                    notificationText="Please Sign Up"
                    error="Invalid Credentials"
                  />
                </Route>
                <Route path="/market-research">
                  <MarketResearchPage />
                </Route>
                <Route path = "/Restaurant_Dashboard/" component={Restaurant_Dashboard}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
     </UserProvider>
  );

}
