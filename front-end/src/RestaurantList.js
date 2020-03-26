import React, { useState, useEffect } from 'react';
import './RestaurantList.scss';


// InfoBox component
// TODO:
// - move to own file
const InfoBox = (props) => {
	const data = props.data
	return (
		<div className="InfoBox" key={props.key}>
			<div className="InfoBox__name">{ data['name'] }</div>
			<div className="InfoBox__address">{ data['address'] }</div>
			<div className="InfoBox__review_count">{ data['review_count'] }</div>
		</div>
	)
}



const RestaurantList = (props) => {
	const data = props.response;

	const [rows, setRows] = useState([]);

	useEffect(() => {
		if (data != 0) {
			const tempRows = []
			for(const obj of data) {
				tempRows.push(<InfoBox key={obj.business_id} data={obj} />)
				console.log("rows: ", rows)
			}
			setRows(tempRows)
		}
	}, [data])

	return (
		<div className="RestaurantList">
			{rows.map(obj => <div> {obj} </div>)}
		</div>
	)
}

export default RestaurantList;