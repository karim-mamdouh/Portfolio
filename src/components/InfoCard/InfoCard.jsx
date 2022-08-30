import React from "react";
//Scss styling file
import "./InfoCard.scss";
//Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoCard = (props) => {
  //If anchor optin is selected the returned content is wrapped with anchor tag
  //with entered href content
  if (props.anchor) {
    return (
      <div className="info-card">
        <a href={props.href}>
          <FontAwesomeIcon icon={props.icon} className="info-card__icon" />
          <p className="info-card__text">
            <span>{props.head}</span>
            {props.text}
          </p>
        </a>
      </div>
    );
  }
  //Otherwise it's returned as normal text
  return (
    <div className="info-card">
      <FontAwesomeIcon icon={props.icon} className="info-card__icon" />
      <p className="info-card__text">
        <span>{props.head}</span>
        {props.text}
      </p>
    </div>
  );
};

export default InfoCard;
