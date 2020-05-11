import React from 'react';
import './Quick_Facts.scss';


const Quick_Facts_RD = (props) => {
  // process the data
  const data = props.response;


  return (
    <div>
      <div id="box">
        <div id="title">Resturant Overview</div>
        <div id="quick-facts">
          <div className="col">
            <div className="data">{data.amenities_count}</div>
            <div className="title">amenities</div>
          </div>
          <div className="col">
            <div className="data">{'$'.repeat(data.price_level)}</div>
            <div className="title">price</div>
          </div>
          <div className="col">
            <div className="data">{data.review_count}</div>
            <div className="title">reviews</div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Quick_Facts_RD;
