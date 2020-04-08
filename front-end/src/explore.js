import React from "react";
import SearchResults from "./SearchResults"
import "./explore.scss";
import {
	Switch,
	Route,
	Link
} from "react-router-dom";

import Signup from "./signup.js"

const Explore = props => {
    let{isLoggedIn} = props;
    
    if(isLoggedIn){
        return (
            <div className="ExploreSignedIn">
                <div id="explore-hero">
                    <form>
                        <label>I am looking for <input type="text" name="cuisine" value="cuisine"/> </label>
                        <br></br>
                        <input type="submit" name="search" value="search"/>
                    </form>
                </div>
                <div>                   
                    <SearchResults />
                </div>
            </div>
    
        );

    }
    else {
        return (
        <div className="ExploreNotSignedIn">
            
            <div id ="Explore-NSI-hero"> 
                <h1> Welcome to Food Check</h1>

            </div>
            <div id="ExploreFeatures">
                Features in FoodCheck
                <ul>
                    <li>personalized dahsboard on restaurant insights</li>
                    <li>detailed analysis on competitors</li>
                    <li>explore nearby restaurants</li>
                </ul>
            </div>
            <div id="ExploreSignUp">
                Sign up for food check
                {/* <button id="sign-up-button"> */}
                    {/* Sign up now */}
                    <Link to = "./signup"><button>sign up</button></Link>
                    <Switch> 
                        <Route path = "/signup">
                            <Signup notificationText = "Welcome to FoodCheck! Please Sign Up!"/>
                        </Route>
                    </Switch>
                {/* </button> */}
            </div>
        </div>
        )
    }
   

};

export default Explore;