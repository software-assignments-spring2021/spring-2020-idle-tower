import React from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";


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

				<Switch>
					<Route exact path="/">
						<div>Home</div>
					</Route>
					<Route path="/example">
						<div>Example</div>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}