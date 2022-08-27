import React from "react";
import "./ExperienceCard.scss";

const ExperienceCard = (props) => {
  return (
    <div className="experience">
      <div className="experience__shape">
        <div className="circle"></div>
        <div className="line"></div>
      </div>
      <div className="experience__content">
        <p className="experience__subtitle">{props.experience.date}</p>
        <h3 className="experience__title">{props.experience.title}</h3>
        <p className="experience__subtitle">{props.experience.company}</p>
        <div className="experience__body">
          {props.experience.description &&
            props.experience.description.map((element, index) => (
              <p key={index}>{element}</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
