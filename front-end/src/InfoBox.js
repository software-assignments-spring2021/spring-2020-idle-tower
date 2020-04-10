import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import './InfoBox.scss';
import Resturant_Dashboard from './Resturant_Dashboard.js';

const InfoBox = (props) => {
	const data = props.data;

	const [secondaryOpen, setSecondaryOpen] = useState(false);

	const toggleSecondary = () => {
		secondaryOpen ? setSecondaryOpen(false) : setSecondaryOpen(true);
	};

	const secondarySection = (
		<div className="InfoBox__secondary">
			<div className="col">
				<div className="InfoBox__secondary__data">{ data['amenities_count'] }</div>
				<div className="InfoBox__secondary__title">amenities</div>
			</div>
			<div className="col">
				<div className="InfoBox__secondary__data">{ "$".repeat(data['price_level']) }</div>
				<div className="InfoBox__secondary__title">price</div>
			</div>
			<div className="col">
				<div className="InfoBox__secondary__data">{ data['foodcheck_score'] }</div>
				<div className="InfoBox__secondary__title">food check score</div>
			</div>
			<div className="col">
				<div className="InfoBox__secondary__data">{ data['review_count'] }</div>
				<div className="InfoBox__secondary__title">reviews</div>
			</div>
		</div>
	);

	return (
		<div className="InfoBox">
			<div className="InfoBox__primary">
				<div className="col">
					<div className="InfoBox__primary__number">{ props.number }.</div>
					<div className="InfoBox__primary__name">
						<Link to = {{pathname:"/Resturant_Dashboard" ,state:{resturant_name:data['name']}}}> {data ['name']} </Link>
						
					</div>
					<div className="InfoBox__primary__address">{ data['address'] }</div>
				</div>
				<div className="col col--right">
					<div className="InfoBox__primary__button" onClick={toggleSecondary}>
						<span>
							<div className="InfoBox__primary__button__title">Quick Insights</div>
							<div className="InfoBox__primary__button__show-hide">{ secondaryOpen ? "Hide" : "Show" }</div>
						</span>
					</div>
				</div>
			</div>
			
			{ secondaryOpen ? secondarySection : null }

			{/* <Switch>
				<Route path = "/Resturant_Dashboard" render = {(props) => <Resturant_Dashboard {...props} name = {data['name']}/>}/>

			</Switch> */}
		</div>

		
	)
}

export default InfoBox;