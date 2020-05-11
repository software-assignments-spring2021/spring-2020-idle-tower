import React from 'react';
import './Header_RD.scss';

const Header_RD = (props) => {
  const data = props.response;
  return (
    <div id="header_dashboard">
      <div id="resturant_name">
        {data.name}
      </div>
      <div id="fc_score">
        <div id="title_fc_score">Food Check Score</div>
        <div id="ratio_fc_score">
          <div id="number_fc_score">{data.foodcheck_score}</div>
          /100
        </div>
      </div>

    </div>

  );
};

export default Header_RD;
