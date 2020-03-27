import React from 'react';
import './InfoBox.scss';

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

export default InfoBox;