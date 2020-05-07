import React, { useContext, useState, useEffect } from 'react';
import MarketResearch from './market-research.js';
import { UserContext } from './user-context.js'
import axios from 'axios';
import { BACKEND_URL } from './_constants';
import { postData } from './_helpers';

const MarketResearchPage = (props) => {
	const [userState] = useContext(UserContext);
	const components = [];

	const [data, setData] = useState(0);
	const [data2,setData2] = useState(0)
	
	// Get mock data
	useEffect(() => {
		axios.get(BACKEND_URL+'/restaurants/list')
		.then(response => response.data.data)
		.then( res => {
			console.log(res)
			setData(res)
		});

		postData(BACKEND_URL+'/user/list-saved-restaurants')
		.then( res_data => {
			console.log(res_data)
			setData2(res_data)
		});
	}, []);

	if (userState['logged-in']) {
		components.push(<MarketResearch data={data2} saved={true} title="Saved Restaurants" key="saved" />);
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