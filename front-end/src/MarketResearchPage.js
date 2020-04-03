import React from 'react';
import MarketResearch from './MarketResearch.js';


const MarketResearchPage = (props) => {
	return (
		<div className="MarketResearchPage">
			<MarketResearch title="Saved Restaurants" />
			<br />
			<MarketResearch title="Top Restaurants in Your Area" />
		</div>
	)
}

export default MarketResearchPage;