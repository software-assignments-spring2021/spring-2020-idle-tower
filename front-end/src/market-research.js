import React, { useState, useEffect } from 'react';
import './market-research.scss';
import RestaurantList from './restaurant-list.js';

import { BACKEND_URL } from './_constants';
import { postData } from './_helpers';


const MarketResearch = (props) => {
	/* Get data */
	// Init state
	const [data, setData] = useState(0);
	
	// Get mock data
	useEffect(() => {
		fetchData();
		// fetch()
		// .then(response => response.json())
		// .then(d => {
		// 	// if (d['error']) {
		// 	// 	// handle mockaroo API error
		// 	// }
			
		// 	setData(d);
		// });
	}, [])

	async function fetchData(){
		const res = fetch(BACKEND_URL + 'restaurant/list');
		res 
			.json()
			.then(res => setData(res));
			
	}
	// 
	return (
		<div className="MarketResearch">
			<div className="MarketResearch__title">{props.title}</div>
		
			<RestaurantList response={data} key={props.title} />
		</div>
	)
}

export default MarketResearch;