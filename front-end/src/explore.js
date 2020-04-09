import React from "react";
//import "./explore-nsi.scss";


const Explore = props => {
    let{isLoggedIn} = props;
    
    if(isLoggedIn){
        return (
            <div className="ExploreSignedIn">
                <div id="explore-hero">
                    <form>
                        <label>I am looking for <input type="text" name="cuisine" value="cuisine"/> </label>
                        <input type="submit" name="search" value="search"/>
                    </form>
                </div>
                <div>
                    <h1>search results</h1>
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
            </div>
            <div id="ExploreSignUp">
                Sign up for food check
                <button>
                    Sign up now
                </button>
            </div>
        </div>
        )
    }
   

};

export default Explore;