import React, { useContext } from 'react';
import MarketResearch from './market-research.js';
import { LoginContext } from './login-context.js'


const MarketResearchPage = (props) => {
	const [loggedIn] = useContext(LoginContext);
	const components = [];
	if (loggedIn) {
		components.push(<MarketResearch title="Saved Restaurants" />);
		components.push(<br />);
	}
	components.push(<MarketResearch title="Top Restaurants in Your Area" />);
	
	return (
		<div className="MarketResearchPage">
			{ components.map(c => <div> {c} </div>) }
		</div>
	)
}

export default MarketResearchPage;