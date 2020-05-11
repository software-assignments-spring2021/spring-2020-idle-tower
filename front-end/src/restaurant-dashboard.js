import React from 'react';

import './restaurant-dashboard.scss';
// all the components on the dashboard page
import QuickFactsRD from './Quick_Facts_RD.js';
import HeaderRD from './Header_RD.js';
import ReviewcardsRD from './Review_cards_RD.js';
import ReviewRatio from './review-ratio.js';

// This is just a layout of what the resturant page


const Restaurant_Dashboard = (props) => {
  const { business_data } = props.location.state;


  // if retriving directly from database
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

    <div className="Restaruant_Dashboard">
      <HeaderRD response={business_data} />
      <QuickFactsRD response={business_data} />
      <ReviewRatio response={business_data} />
      <ReviewcardsRD response={business_data} type_review="Positive" />
      <ReviewcardsRD response={business_data} type_review="Negative" />


    </div>

  );
};


export default Restaurant_Dashboard;
