import React from "react";
import './ArrowBackComponent.scss'
import {Link} from "react-router-dom";
import arrow from "../../assets/images/icon_back.png";
export  function ArrowBackComponent() {

 

    return(
        <div className="arrow-icon">
 <div className="arrow-icon__link"> <img className="arrow-icon__link-im" src={arrow} alt="" /> </div>
        </div>
    );
}