import React, { useState } from 'react';
import './InfoBox.scss';

const InfoBox = (props) => {
	const data = props.data;

	const [secondaryOpen, setSecondaryOpen] = useState(false);

	const toggleSecondary = () => {
		secondaryOpen ? setSecondaryOpen(false) : setSecondaryOpen(true);
	};

	const secondarySection = (
		<div className="InfoBox__secondary">
			<div className="InfoBox__review_count">Review Count: { data['review_count'] }</div>
			<div className="InfoBox__review_count">{ data['review_count'] }</div>
			<div className="InfoBox__review_count">{ data['review_count'] }</div>
			<div className="InfoBox__review_count">{ data['review_count'] }</div>
		</div>
	);

	return (
		<div className="InfoBox">
			<div className="InfoBox__primary" onClick={toggleSecondary}>
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
			
			{ secondaryOpen ? secondarySection : null }
		</div>
	)
}

export default InfoBox;