import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Restaurant_Dashboard.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//** NOTE: need to ADD React state when backend is done **/
// This is just a layout of what the resturant page will look like

//  const Restaruant_Dashboard = props =>{
//     //js goes here 
//     console.log("This is working")
//     // Goal: print the resturant name from marketreaserch
//     return ( 

//        <div className = "Resturant_Dashboard">
//            <h1> It works. {this.props.name}</h1>
//        </div>
        
        
//     );
    
// };  

  class Restaruant_Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        
        return (
        <div>
            <h1> This is my testing dashboard! {this.props.location}</h1>
        
        </div>
        );
    }
};

//ReactDOM.render(<Restruant_Dashboard />, document.getElementById("root")); 


export default Restaruant_Dashboard;