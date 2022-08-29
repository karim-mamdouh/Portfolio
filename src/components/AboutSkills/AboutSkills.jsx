import React from "react";
import "./AboutSkills.scss";
import IDEContainer from "../IDEContainer/IDEContainer";
import html5 from "../../assets/images/skills/html5.png";
import css3 from "../../assets/images/skills/css3.png";
import angular from "../../assets/images/skills/angular.png";
import ts from "../../assets/images/skills/typescript.png";
import js from "../../assets/images/skills/javascript.png";
import bs from "../../assets/images/skills/bootstrap.png";
import tw from "../../assets/images/skills/tailwind.png";
import reactjs from "../../assets/images/skills/reactjs.png";
import sass from "../../assets/images/skills/sass.png";
import cSharp from "../../assets/images/skills/csharp.png";
import git from "../../assets/images/skills/git.png";
import SkillCard from "../SkillCard/SkillCard";

let idCounter = 0;
//Factory function for skill object
const skillGenerator = (name, image) => {
  return {
    id: idCounter++,
    name: name,
    image: image,
  };
};
//Array of skills
const skills = {
  frameworks: [
    skillGenerator("Angular", angular),
    skillGenerator("React JS", reactjs),
  ],
  languages: [
    skillGenerator("JavaScript", js),
    skillGenerator("TypeScript", ts),
    skillGenerator("C#", cSharp),
    skillGenerator("HTML 5", html5),
    skillGenerator("CSS 3", css3),
    skillGenerator("SASS", sass),
  ],
  tools: [
    skillGenerator("BootStrap", bs),
    skillGenerator("Tailwind CSS", tw),
    skillGenerator("Git", git),
  ],
};

const AboutSkills = (props) => {
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
