import React, { useState, useEffect } from 'react';
import "./Quick_Facts.scss";

const Quick_Facts_RD = (props) =>{
    //process the data 
    const data = props.response;
  



    return (
        <div> 
            <h2> Quick Facts: Amentities, Price, Reviews</h2>
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
				<div className="InfoBox__secondary__data">{data['review_count']}</div>
				<div className="InfoBox__secondary__title">reviews</div>
			</div>
		</div>
        </div>

    );
};

export default Quick_Facts_RD;