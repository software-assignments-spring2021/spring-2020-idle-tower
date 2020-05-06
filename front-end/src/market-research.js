import React, { useState, useEffect } from "react";
import "./market-research.scss";
import RestaurantList from "./restaurant-list.js";
import axios from "axios";
import { BACKEND_URL } from "./_constants";

const MarketResearch = (props) => {
  /* Get data */
  // Init state
  const [data, setData] = useState(0);

  // Get mock data
  useEffect(() => {
    axios.get(BACKEND_URL + "/restaurants/list").then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
    // fetch(BACKEND_URL + "/restaurants/list")
    // .then(response => response.json())
    // .then(d => {
    // 	// if (d['error']) {
    // 	// 	// handle mockaroo API error
    // 	// }

    // 	setData(d);
    // });
  }, []);

  //
  return (
    <div className="MarketResearch">
      <div className="MarketResearch__title">{props.title}</div>

      <RestaurantList response={data} key={props.title} />
    </div>
  );
};

export default MarketResearch;
