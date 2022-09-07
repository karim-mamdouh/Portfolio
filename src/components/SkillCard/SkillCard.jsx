//React
import React from "react";
//Scss styling file
import "./SkillCard.scss";

//Wraps the skill image
const SkillCard = (props) => {
  return (
    <div className="skill-card">
      <img alt="skill-logo" src={props.image} />
    </div>
  );
};

export default SkillCard;
