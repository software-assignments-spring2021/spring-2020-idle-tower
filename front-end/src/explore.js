import React, { useContext } from 'react';
import "./explore.scss";
import axios from 'axios';
import {
	Switch,
	Route,
	Link
} from "react-router-dom";
import Signup from "./signup.js";
import SearchResults from "./search-results.js";
import { UserContext } from './user-context.js';


// const Explore = (props) => {
//     const [userState] = useContext(UserContext);
//     const loggedIn = userState['logged-in'];
    
//     if(loggedIn){
//         return (
//             <div className="ExploreSignedIn">
//                 <div id="explore-hero">
//                     <form>
//                         <label>I am looking for <input type="text" name="cuisine" value="cuisine"/> </label>
//                         <br></br>
//                         <input type="submit" name="search" value="search"/>
//                     </form>
//                 </div>
//                 <div>                   
//                     <SearchResults />
//                 </div>
//             </div>
    
//         );

//     }
//     else {
//         return (
//         <div className="ExploreNotSignedIn">
            
//             <div id ="Explore-NSI-hero"> 
//                 <h1> Welcome to Food Check</h1>

//             </div>
//             <div id="ExploreFeatures">
//                 <h2>Features in FoodCheck</h2>
//                 <ul>
//                     <li>personalized dahsboard on restaurant insights</li>
//                     <li>detailed analysis on competitors</li>
//                     <li>explore nearby restaurants</li>
//                 </ul>
//             </div>
//             <div id="ExploreSignUp">
//                 <h2>Sign up for food check!</h2>
//                 <h1> </h1>
//                 <div id="button-div"><Link to = "./signup"><button id="sign-up-button">sign up</button></Link>
//                     <Switch> 
//                         <Route path = "/signup">
//                             <Signup notificationText = "Welcome to FoodCheck! Please Sign Up!"/>
//                         </Route>
//                     </Switch></div>
                    
//                 {/* </button> */}
//             </div>
//         </div>
//         )
//     }
   

// };

// export default Explore;
class Explore extends React.Component {
    constructor(props){
        super(props);
        this.state ={isLoggedIn:true, SearchResults:[]}
    }
    
    apiCall(){
        axios.get("/search",{"query":this.state.textValue}).then(Response =>
         {this.setState({"SearchResults":Response})}).catch(
             err => (console.log("Error !"))
         )
    }
    
   
 
     render(){
         let{isLoggedIn} = this.props;
         if(isLoggedIn){
             return (
                 <div className="ExploreSignedIn">
                     <div id="explore-hero">
                         <h3>I am looking for <input value={this.state.textValue}></input></h3>
                     <button>Search</button>
                         
                     </div>
                     <div className="beforeSearch">
                         <h2>Recommended For you</h2>
                         <SearchResults />
     
                     </div>
                     <div className="afterSearch"> 
                         <h2> Search results</h2>
     
                         <SearchResults />
                     </div>
                 </div>
         
             );
 
         }
 
         else{
             return (
                 <div className="ExploreNotSignedIn">
                     
                     <div id ="Explore-NSI-hero"> 
                         <h1> Welcome to Food Check</h1>
         
                     </div>
                     <div id="ExploreFeatures">
                         <h2>Features in FoodCheck</h2>
                         <ul>
                             <li>personalized dahsboard on restaurant insights</li>
                             <li>detailed analysis on competitors</li>
                             <li>explore nearby restaurants</li>
                         </ul>
                     </div>
                     <div id="ExploreSignUp">
                         <h2>Sign up for food check!</h2>
                         <h1> </h1>
                         <div id="button-div"><Link to = "./signup"><button id="sign-up-button">sign up</button></Link>
                             <Switch> 
                                 <Route path = "/signup">
                                     <Signup notificationText = "Welcome to FoodCheck! Please Sign Up!"/>
                                 </Route>
                             </Switch></div>
                     </div>
                 </div>
                 )
 
         }
     }
 
 
 }
 
 export default Explore;