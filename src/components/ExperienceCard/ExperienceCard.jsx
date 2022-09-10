//React
import React from "react";
//Scss styling file
import "./ExperienceCard.scss";

const ExperienceCard = (props) => {
  return (
    <div className="experience">
      {/* Timeline shape */}
      <div className="experience__shape">
        <div className="circle"></div>
        <div className="line"></div>
      </div>
      {/* Experience content */}
      <div className="experience__content">
        {/* Date */}
        <p className="experience__subtitle">{props.experience.date}</p>
        {/* Title */}
        <h3 className="experience__title">{props.experience.title}</h3>
        {/* Company */}
        <p className="experience__subtitle">{props.experience.company}</p>
        {/* Description block */}
        <div className="experience__body">
          {props.experience.details &&
            props.experience.details.map((element, index) => (
              <p key={index}>{element}</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
