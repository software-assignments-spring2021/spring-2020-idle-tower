import React from "react";
import "./explore-nsi.scss";

const ExploreNotSignedIn = props => {

    return (
        <div className="ExploreNotSignedIn">
            <div id ="Explore-NSI-hero"> 
                <h1> Welcome to Food Check</h1>
            </div>
            <div id="ExploreFeatures">
                Features in FoodCheck
            </div>
            <div id="ExploreSignUp">
                Sign up for food check
                <button>
                    Sign up now
                </button>
            </div>
        </div>

    );
};

export default ExploreNotSignedIn;