import React from "react";
import "./SkillCard.scss";

const SkillCard = (props) => {
  return (
    <div className="skill-card">
      <img alt="skill-logo" src={props.image} />
    </div>
  );
};

export default SkillCard;
