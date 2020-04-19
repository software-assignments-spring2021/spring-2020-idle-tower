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
      <div class = "card_review">Review 1 </div>
      <div class = "card_review"> Review 2</div>
      <div class = "card_review"> Review 3</div>
      <div class = "card_review">Review 4</div>
      <div class = "card_review">Review 5</div>
      </Carousel>
    </div>

  );
  
}
export default Review_cards_RD;