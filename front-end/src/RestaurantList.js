import React, { useState, useEffect } from 'react';
import './RestaurantList.scss';

import InfoBox from './InfoBox.js';

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