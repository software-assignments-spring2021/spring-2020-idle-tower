import React, { useState, useEffect } from 'react';
import './market-research.scss';
import RestaurantList from './restaurant-list.js';
import axios from 'axios';
import { BACKEND_URL } from './_constants';


const MarketResearch = (props) => {
	const data = props.data
	/* Get data */
	// Init state
	// const [data, setData] = useState(0);
	// const [data2,setData2] = useState(0)
	
	// // Get mock data
	// useEffect(() => {
	// 	axios.get(BACKEND_URL+'/restaurants/list')
	// 	.then( res => {
	// 		console.log(res)
	// 		setData(res)
	// 	})
	// 	// axios.get(BACKEND_URL+'/restaurants/list2')
	// 	// .then( res => {
	// 	// 	console.log(res)
	// 	// 	setData2(res)
	// 	// })
		
	// 	// fetch(BACKEND_URL + "/restaurants/list")
	// 	// .then(response => response.json())
	// 	// .then(d => {
	// 	// 	// if (d['error']) {
	// 	// 	// 	// handle mockaroo API error
	// 	// 	// }
			
	// 	// 	setData(d);
	// 	// });
	// }, [])
	// 
	return (
		<div className="MarketResearch">
			<div className="MarketResearch__title">{props.title}</div>
		
			<RestaurantList response={data} key={props.title} />
		</div>
	)
}

export default MarketResearch;