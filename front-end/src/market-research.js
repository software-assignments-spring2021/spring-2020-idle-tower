import React from 'react';
import './market-research.scss';
import RestaurantList from './restaurant-list.js';


const MarketResearch = (props) => {
  const { data, saved, title } = props;

  return (
    <div className="MarketResearch">
      <div className="MarketResearch__title">{props.title}</div>

      <RestaurantList response={data} key={title} saved={saved} />
    </div>
  );
};

export default MarketResearch;
