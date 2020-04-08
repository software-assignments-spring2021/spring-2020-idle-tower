import React from 'react';
import './lib/reset.css';
import './App.scss';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

// Components
import Login from "./login.js";
import Signup from "./signup.js";
import MarketResearchPage from './MarketResearchPage.js'
import Explore from "./explore.js"


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
						<li>
							<Link to="/market-research">Market Research</Link>
						</li>
					</ul>
				</nav>

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
						<Route path = "/signup">
							<Signup notificationText = "Please Sign Up"
							error = "Invalid Credentials"
							/>
						</Route>
						<Route path="/market-research">
							<MarketResearchPage />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}
