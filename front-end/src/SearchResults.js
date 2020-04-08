import React, { useState, useEffect } from 'react';
import './SearchResults.scss';

import RestaurantList from './RestaurantList.js';


const SearchResults = (props) => {
	/* Get data */
	// Init state
	const [data, setData] = useState(0);
	
	// Get mock data
	useEffect(() => {
		fetch('https://my.api.mockaroo.com/business.json?key=71f47770')
		.then(response => response.json())
		.then(d => {
			// if (d['error']) {
			// 	// handle mockaroo API error
			// }
			
			setData(d);
		});
	}, [])
	// 
	return (
		<div className="SearchResults">
			<div className="SearchResults__title">Search Results</div>
			<RestaurantList response={data} key="search-results" />
		</div>
	)
}

export default SearchResults;