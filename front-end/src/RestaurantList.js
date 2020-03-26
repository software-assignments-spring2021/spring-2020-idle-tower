import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './RestaurantList.scss';


// InfoBox component
// TODO:
// - move to own file
const InfoBox = (props) => {
	const id = props.id

	const [data, setData] = useState(0);

	// const response = await axios(
	// 	"https://my.api.mockaroo.com/business.json?key=71f47770"
	// );
	// setData(response)

	fetch('https://my.api.mockaroo.com/business.json?key=71f47770')
		.then(response => response.json())
		.then(d => {
			console.log(d);
			// setData([d]);

			// if (d['error']) {
			// 	// handle mockaroo API error
			// }
		})

    return (
        <div className="InfoBox" key={id}>
            {data}
        </div>
    )
}



const RestaurantList = (props) => {
	const rlist = props.restaurant_ids || [1,2,3];
	const rows = []
	for(const r of rlist) {
		rows.push(<InfoBox id={r} key={r} />)
	}

    return (
        <div className="RestaurantList">
        	{rows}
        </div>
    )
}

export default RestaurantList;