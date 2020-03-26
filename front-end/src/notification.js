import React from 'react';
import './Notification.scss';

const Notification = (props) => {
	return (
		<div>
			<div className="Notification">
				{props.text}
			</div>
			{(() => {
				if (props.error) { 
					return (
						<div className="Notification Notification--error">
							{props.error}
						</div>
					);
				}
			})()}
		</div>
	)
}

export default Notification;