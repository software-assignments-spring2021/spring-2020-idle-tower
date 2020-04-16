//import React, { Component } from "react";
import React, { useState, useEffect } from 'react';

import "./Restaurant_Dashboard.scss";

//** NOTE: need to ADD React state when backend is done **/
// This is just a layout of what the resturant page will look like

 const Restaurant_Dashboard = (props) =>{
    console.log("This is working. Name + Key: ", props.location.state.name,"+", props.location.state.id)

    /* Get data */
	// Init state
	const [data, setData] = useState(0);
	
	// Get mock data
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

    return ( 

       <div className = "Restaruant_Dashboard">
           <h1> Welcome to your dashboard {props.location.state.name} id key {props.location.state.id}!  </h1>
       </div>        
        
    );
};  


 /*  class Restaurant_Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        
        return (
        <div>
            <h1> Welcome to your dashboard {this.props.location.state.name}!</h1>
        
        </div>
        );
    }
};

//ReactDOM.render(<Restruant_Dashboard />, document.getElementById("root"));  */


export default Restaurant_Dashboard;