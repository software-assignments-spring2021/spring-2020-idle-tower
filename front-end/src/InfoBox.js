import React, { useState } from 'react';
import './InfoBox.scss';

const InfoBox = (props) => {
	const data = props.data;

	const [secondaryOpen, setSecondaryOpen] = useState(false);
	

	const INFO_BOX_SECONDARY_OPEN = "InfoBox__secondary InfoBox__secondary--open";
	const INFO_BOX_SECONDARY_CLOSED = "InfoBox__secondary";
	const [InfoBox__secondaryClasses, setInfoBox__secondaryClasses] = useState(INFO_BOX_SECONDARY_CLOSED);

	const toggleSecondary = () => {
		if (!secondaryOpen) {
			setInfoBox__secondaryClasses(INFO_BOX_SECONDARY_OPEN)
			setSecondaryOpen(true)
		} else {
			setInfoBox__secondaryClasses(INFO_BOX_SECONDARY_CLOSED)
			setSecondaryOpen(false)
		}

	};

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
			<div className={ InfoBox__secondaryClasses }>
				<div className="InfoBox__review_count">Review Count: { data['review_count'] }</div>
				<div className="InfoBox__review_count">{ data['review_count'] }</div>
				<div className="InfoBox__review_count">{ data['review_count'] }</div>
				<div className="InfoBox__review_count">{ data['review_count'] }</div>
			</div>
		</div>
	)
}

export default InfoBox;