import React, { useState, useEffect } from 'react';
import "./Header_RD.scss";

const Header_RD  =  (props) =>{
    const data = props.response; 
    return(
        <div class = "header_dashboard">
            <div id = "name">
                {data["name"]}
            </div>
            <div id = "fc_score" >
                <h2>Food Check Score</h2>
                {data["foodcheck_score"]}
            </div>

        </div>

    );

};

export default Header_RD; 