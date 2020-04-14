import React, { useContext } from 'react';
import MarketResearch from './market-research.js';
import { UserContext } from './user-context.js'


const MarketResearchPage = (props) => {
	const [userState] = useContext(UserContext);
	const components = [];
	if (userState['logged-in']) {
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