import React from 'react';
import './explore.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchResults from './search-results';


// export default Explore;
class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: true, SearchResults: [] };
  }

  apiCall() {
    axios.get('/search', { query: this.state.textValue }).then((Response) => { this.setState({ SearchResults: Response }); }).catch(
      (err) => (console.log('Error !')),
    );
  }


  render() {
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      return (
        <div className="ExploreSignedIn">
          <div id="explore-hero">
            <h3>
              I am looking for
              <input value={this.state.textValue} />
            </h3>
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


    return (
      <div className="explore">
        <div className="explore__title explore__title--primary">
          <span> Welcome to Food Check</span>
        </div>

        <div className="explore__title explore__title--secondary">
          <span>Features in FoodCheck</span>
        </div>

        <div className="explore__features">
          <ul>
            <li>personalized dahsboard on restaurant insights</li>
            <li>detailed analysis on competitors</li>
            <li>explore nearby restaurants</li>
          </ul>
        </div>

        <div className="explore__title explore__title--secondary">
          <span>Sign up for food check!</span>
        </div>
        <div className="explore__cta">
          <Link to="./signup"><button>sign up</button></Link>
        </div>
      </div>
    );
  }
}

export default Explore;
