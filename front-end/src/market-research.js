import React, { useState, useEffect } from 'react';
import './market-research.scss';
import RestaurantList from './restaurant-list.js';
import axios from 'axios';
import { BACKEND_URL } from './_constants';


const MarketResearch = (props) => {
	const data = props.data
	
	return (
		<div className="MarketResearch">
			<div className="MarketResearch__title">{props.title}</div>
		
			<RestaurantList response={data} key={props.title} />
		</div>
	)
}

export default MarketResearch;