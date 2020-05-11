import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Review_cards_RD.scss';


const Review_cards_RD = (props) => {
  const data = props.response;
  const id = data.business_id;
  const type = props.type_review;
  console.log(id, type);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="review">
      <h1 id="type_review">
        {' '}
        5 Most
        {props.type_review}
        {' '}
        Reviews
        {' '}
      </h1>
      <Carousel id="carousel_review" responsive={responsive} dotListClass="custom-dot-list-style">

        <div className="card_review">
          The resturant was great. Would eat again amazing food and
          atmostphere. Highly reccomend!
        </div>
        <div className="card_review">
          {' '}
          The resturant was great. Would eat again amazing food and
          atmostphere. Highly reccomend!
        </div>
        <div className="card_review">
          {' '}
          The resturant was great. Would eat again amazing food and
          atmostphere. Highly reccomend!
        </div>
        <div className="card_review">
          The place was horrible! I saw rats and they
          didnt even wash their hands when preparing food. Disgusting! Do not reccomend.
          {' '}
        </div>
        <div className="card_review">
          The resturant was great. Would eat again amazing food and
          atmostphere. Highly reccomend!
        </div>
      </Carousel>
    </div>

  );
};
export default Review_cards_RD;
