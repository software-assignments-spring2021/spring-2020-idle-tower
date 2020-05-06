import React, { useContext, useState, useEffect } from 'react';
import MarketResearch from './market-research.js';
import { UserContext } from './user-context.js'
import axios from 'axios';
import { BACKEND_URL } from './_constants';

const MarketResearchPage = (props) => {
	const [userState] = useContext(UserContext);
	const components = [];

	const [data, setData] = useState(0);
	const [data2,setData2] = useState(0)
	
	// Get mock data
	useEffect(() => {

		
		axios.get(BACKEND_URL+'/restaurants/list')
		.then( res => {
			console.log(res)
			setData(res)
		})


		axios.get(BACKEND_URL+'/restaurants/list2')
		.then( res => {
			console.log(res)
			setData2(res)
		})
		
		// fetch(BACKEND_URL + "/restaurants/list")
		// .then(response => response.json())
		// .then(d => {
		// 	// if (d['error']) {
		// 	// 	// handle mockaroo API error
		// 	// }
			
		// 	setData(d);
		// });
	}, [])

	if (userState['logged-in']) {
		components.push(<MarketResearch data2 ={data2} title="Saved Restaurants" key="saved" />);
		components.push(<br />);
	}
	components.push(<MarketResearch data={data} title="Top Restaurants in Your Area" key="top" />);
	
	return (
		<div className="MarketResearchPage">
			{ components.map(c => <div> {c} </div>) }
		</div>
	)
}

export default MarketResearchPage;