import React from "react";
import "./InfoCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoCard = (props) => {
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
