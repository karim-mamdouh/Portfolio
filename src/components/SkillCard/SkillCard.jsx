//React
import React from "react";
//Scss styling file
import "./SkillCard.scss";

//Wraps the skill image
const SkillCard = ({ name, image }) => {
  return (
    <div className="skill-card" title={name}>
      <img alt="skill-logo" src={image} />
    </div>
  );
};

export default SkillCard;
