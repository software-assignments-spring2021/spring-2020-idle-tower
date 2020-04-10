import React from "react";
import ReactDOM from "react-dom";
import "./resturant_dashboard.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//** NOTE: need to ADD React state when backend is done **/
// This is just a layout of what the resturant page will look like

 const Resturant_Dashboard = (props) =>{

    const data = props.response;
    
    // Goal: print the resturant name from marketreaserch
    return ( 
        <div className = "Restruant_Dashboard">
            <h1> Testing 123 {props}</h1>
            <h2>edmond </h2> 
            
        </div>
        
    );
    
}; 

/* class Restruant_Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            resturant_name : "none"
        }
    }
    render(){
        return (
        <div>
            <h1> Testing </h1>
            <h1>{this.state.resturant_name} </h1>
        
        </div>
        );
    }

}
ReactDOM.render(<Restruant_Dashboard />, document.getElementById("root")); */

export default Resturant_Dashboard;