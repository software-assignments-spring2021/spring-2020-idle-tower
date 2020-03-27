import React from 'react';
import './InfoBox.scss';

const InfoBox = (props) => {
	const data = props.data
	return (
		<div className="InfoBox" key={props.key}>
			<div className="InfoBox__primary">
				<div className="col">
					<div className="InfoBox__primary__number">{ props.number }.</div>
					<div className="InfoBox__primary__name">{ data['name'] }</div>
					<div className="InfoBox__primary__address">{ data['address'] }</div>
				</div>
				<div className="col col--icons">
					<div className="InfoBox__primary__icon">ICON</div>
					<div className="InfoBox__primary__icon">ICON</div>
				</div>
			</div>
			<div className="InfoBox__secondary">
				<div className="InfoBox__review_count">{ data['review_count'] }</div>
				<div className="InfoBox__review_count">{ data['review_count'] }</div>
				<div className="InfoBox__review_count">{ data['review_count'] }</div>
				<div className="InfoBox__review_count">{ data['review_count'] }</div>
			</div>
			
			
		</div>
	)
}

export default InfoBox;