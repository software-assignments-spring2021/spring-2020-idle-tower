import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './info-box.scss';
import { BACKEND_URL } from './_constants';
import { postData } from './_helpers';
import { UserContext } from './user-context.js'

const InfoBox = (props) => {
	const data = props.data;

	const [userState] = useContext(UserContext);
	const isLoggedIn = userState['logged-in']

	// Secondary section
	// -----------------
	const [secondaryOpen, setSecondaryOpen] = useState(false);

	const toggleSecondary = () => {
		secondaryOpen ? setSecondaryOpen(false) : setSecondaryOpen(true);
	};

	const secondarySection = (
		<div className="InfoBox__secondary">
			<div className="col">
				<div className="InfoBox__secondary__data">{data['amenities_count']}</div>
				<div className="InfoBox__secondary__title">amenities</div>
			</div>
			<div className="col">
				<div className="InfoBox__secondary__data">{"$".repeat(data['price_level'])}</div>
				<div className="InfoBox__secondary__title">price</div>
			</div>
			<div className="col">
				<div className="InfoBox__secondary__data InfoBox__secondary__data--foodcheck-score">{ data['foodcheck_score'] }</div>
				<div className="InfoBox__secondary__title">food check score</div>
			</div>
			<div className="col">
				<div className="InfoBox__secondary__data">{data['review_count']}</div>
				<div className="InfoBox__secondary__title">reviews</div>
			</div>
		</div>
	);


	// Save/delete restaurant to account
	// ---------------------------------
	const [restSavedStatus, setRestSavedStatus] = useState(false);

	// set initial restSavedStatus value
	// runs on component mount
	useEffect(() => {
		postData(BACKEND_URL + '/saved-restaurant-status', { "business_id": data["business_id"] })
			.then((resData) => {
				setRestSavedStatus(resData.saved);
			});
	}, [data])

	const saveRest = () => {
		postData(BACKEND_URL + '/saved-restaurant', { "business_id": data["business_id"] })
			.then(() => {
				setRestSavedStatus(true);
			});
	}

	const removeRest = () => {
		postData(BACKEND_URL + '/saved-restaurant', { "business_id": data["business_id"] })
			.then(() => {
				setRestSavedStatus(false);
			});
	}

	const saveRestButton = (
		<div className="InfoBox__primary__button--alt" onClick={restSavedStatus ? removeRest : saveRest}>
			<span>
				<div>{restSavedStatus ? "Remove" : "Save"} Restaurant</div>
			</span>
		</div>
	)


	return (
		<div className="InfoBox">
			<div className="InfoBox__primary">
				<div className="col">
					<div className="InfoBox__primary__number">{props.number}.</div>
					<div className="InfoBox__primary__name">
						<Link to={{ 
							pathname: "/Restaurant_Dashboard", 
							state: {name: data['name'], id: data["business_id"], business_data:data}}}>	
							{data['name']} </Link>
						
					</div>
					<div className="InfoBox__primary__address">{data['address']}</div>
				</div>

				<div className="col col--right">
					<div className="InfoBox__primary__button" onClick={toggleSecondary}>
						<span>
							<div className="InfoBox__primary__button__title">Quick Insights</div>
							<div className="InfoBox__primary__button__show-hide">{secondaryOpen ? "Hide" : "Show"}</div>
						</span>
					</div>
					{isLoggedIn ? saveRestButton : null}
				</div>
			</div>

			{secondaryOpen ? secondarySection : null}
		</div>


	)
}

export default InfoBox;