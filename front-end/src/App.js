import React from 'react';
import './lib/reset.css';
import './App.scss';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import MarketResearchPage from './MarketResearchPage.js'


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
							<Link to="/example">Example</Link>
						</li>
					</ul>
				</nav>

				<div className="content">
					<Switch>
						<Route exact path="/">
							<MarketResearchPage />
						</Route>
						<Route path="/example">
							<div>Example</div>
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}