import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Review_cards_RD.scss";


const Review_cards_RD = (props) =>{
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div class = "review">
      <h1 id = "type_review"> {props.type_review} Reviews </h1>
      <Carousel id = "carousel_review" responsive={responsive}>
      <div class = "card_review"><div class = "review_title"> Review Title</div>The resturant was great. Would eat again amazing food and 
      atmostphere. Highly reccomend!</div>
      <div class = "card_review"> <div class = "review_title"> Review Title</div>The resturant was great. Would eat again amazing food and 
      atmostphere. Highly reccomend!</div>
      <div class = "card_review"> <div class = "review_title"> Review Title</div>The resturant was great. Would eat again amazing food and 
      atmostphere. Highly reccomend!</div>
      <div class = "card_review"><div class = "review_title"> Review Title</div>The place was horrible! I saw rats and they
      didnt even wash their hands when preparing food. Disgusting! Do not reccomend. </div>
      <div class = "card_review"><div class = "review_title"> Review Title</div>The resturant was great. Would eat again amazing food and 
      atmostphere. Highly reccomend!</div>
      </Carousel>
    </div>

  );
  
}
export default Review_cards_RD;