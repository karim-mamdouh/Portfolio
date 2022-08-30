import React from "react";
//Scss styling file
import "./AboutSkills.scss";
//Components
import IDEContainer from "../IDEContainer/IDEContainer";
import SkillCard from "../SkillCard/SkillCard";
//Skills data
import { skills } from "../../data/skills";

const AboutSkills = (props) => {
  //classes variable to pass classes externally
  const classes = "skills " + (props.className ? props.className : "");
  return (
    <IDEContainer className={classes}>
      <p className="skills__header">&lt;Skills /&gt;</p>
      <div className="skills__content">
        <div className="skills__container">
          <p className="skills__title">&lt;FrameWorks /&gt;</p>
          <div className="skills__set">
            {skills.frameworks.map((skill) => (
              <SkillCard image={skill.image} key={skill.id} />
            ))}
          </div>
        </div>
        <div className="skills__container">
          <p className="skills__title">&lt;Languages /&gt;</p>
          <div className="skills__set">
            {skills.languages.map((skill) => (
              <SkillCard image={skill.image} key={skill.id} />
            ))}
          </div>
        </div>
        <div className="skills__container">
          <p className="skills__title">&lt;Tools /&gt;</p>
          <div className="skills__set">
            {skills.tools.map((skill) => (
              <SkillCard image={skill.image} key={skill.id} />
            ))}
          </div>
        </div>
      </div>
    </IDEContainer>
  );
};

export default AboutSkills;
