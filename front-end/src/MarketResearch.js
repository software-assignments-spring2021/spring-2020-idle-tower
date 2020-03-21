import React from 'react';
import ReactDOM from 'react-dom';
import './MarketResearch.scss';

import RestaurantList from './RestaurantList.js';


const MarketResearch = (props) => {

    return (
        <div className="MarketResearch">
            <div className="MarketResearch__title">{props.title}</div>
            <RestaurantList />
        </div>
    )
}

export default MarketResearch;