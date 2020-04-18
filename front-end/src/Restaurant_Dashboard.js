//import React, { Component } from "react";
import React, { useState, useEffect } from 'react';

import "./Restaurant_Dashboard.scss";
import Quick_Facts_RD from "./Quick_Facts_RD.js";

// This is just a layout of what the resturant page will look like
// And fetching the data here 

 const Restaurant_Dashboard = (props) =>{

    var business_data = props.location.state.business_data;

   
   

    //if retriving directly from database 	
/* 	// Get mock data
    const [data, setData] = useState(0);
	useEffect(() => {
		fetch('https://my.api.mockaroo.com/business.json?key=71f47770')
		.then(response => response.json())
		.then(d => {
			// if (d['error']) {
			// 	// handle mockaroo API error
			// }
			
			setData(d);
		});
	}, [])

    // Find the business in database 
    var ctr; 
    var curr_business;
    var data_business;
    for (ctr = 0; ctr < data.length;ctr++){
        curr_business = data[ctr];
        console.log(curr_business['business_id'], "   ", curr_id)
        if (curr_business["business_id"] == curr_id){
            data_business = curr_business;
            console.log("FOUND IT ", data_business)

            break;
        }
        
    } */
 

    return ( 

       <div className = "Restaruant_Dashboard">
           <h1> Welcome to your dashboard {business_data["name"]}!  </h1>
           <Quick_Facts_RD response = {business_data} key = "saved"/>
           <h1></h1> 
           
       </div>        
        
    );
};  


 

export default Restaurant_Dashboard;