import React from 'react';
import './review-ratio.scss';


const ReviewRatio = (props) => {
  const data = props.response;
  const pos_score = data.foodcheck_score;
  const neg_score = 100 - pos_score;
  console.log(pos_score);

  return (
    <div id="ratio-box">

      <div id="percent-box-left">
        <div className="title">
          percentage of positive reviews
        </div>
        <div className="percent">
          {pos_score}
          %
        </div>

      </div>
      <div id="percent-box-right">
        <div className="title">
          percentage of negative reviews
        </div>
        <div className="percent">
          {neg_score}
          %
        </div>

      </div>


    </div>
  );
};

export default ReviewRatio;
