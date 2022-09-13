//React
import React from "react";
//Scss styling file
import "./ProjectCard.scss";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = (props) => {
  //classes variable to pass classes externally, and adds/removes animations based on animation direction
  let classes =
    (props.animationLeft ? "animation-left " : "") +
    (props.animationRight ? "animation-right " : "") +
    "project";

  return (
    <div className={classes}>
      {/* Website preview image */}
      <figure className="project__img-container">
        <a href={props.project.link} target="_blank" rel="noreferrer">
          <img src={props.project.image} alt={props.project.name} />
        </a>
      </figure>
      <div className="project__text">
        {/* Project title */}
        <h4>
          <a href={props.project.link} target="_blank" rel="noreferrer">
            &lt;{props.project.name} /&gt; &nbsp;
          </a>
          <a href={props.project.repo} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </h4>
        {/* Project description */}
        <p>{props.project.description}</p>
        <div className="project__tech-container">
          {/* Technologies used section */}
          <p>&lt;Technologies & Tools/&gt;</p>
          <div className="project__tech">
            {/* Technologies images */}
            {props.project.technologies.map((element, index) => (
              <a
                href={element.link}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <img
                  src={element.image}
                  alt={element.name}
                  className="tech-img"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
