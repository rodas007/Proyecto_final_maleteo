import React from "react";
import google from "../../assets/images/google.svg";
import facebook from "../../assets/images/facebook.svg";
import "./SocialMediaComponent.scss";

export function SocialMediaComponent() {
  return (
    <div className="c-sm">
      <div className="c-sm__container-facebook">
        <img className="c-sm__img" src={facebook} alt="/" />
        <p className="c-sm-t">Facebook</p>
      </div>
      <div className="c-sm__container-google">
        <img src={google} alt="/" className="c-sm__img google" />
        <p  className="c-sm-t">Google</p>
      </div>
    </div>
  );
}
