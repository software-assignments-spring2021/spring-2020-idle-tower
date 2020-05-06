import React from 'react';
import "./review-ratio.scss";


const ReviewRatio = (props) => {
    const data = props.response;
    const pos_score = data['foodcheck_score']
    const neg_score = 100-pos_score;
    console.log(pos_score);

    return (
        <div id = "ratio-box">
            
            <div id = "percent-box-left">
                <div class = "title">
                    percentage of positive reviews
                </div>
                <div class = "percent">
                    {pos_score}%
                </div>

            </div>
            <div id = "percent-box-right">
                <div class = "title">
                    percentage of negative reviews
                </div>
                <div class = "percent">
                    {neg_score}%
                </div>
                    
            </div>
            

        </div>
    );

};

export default ReviewRatio;

