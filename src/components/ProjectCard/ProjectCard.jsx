//React
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
//Scss styling file
import "./ProjectCard.scss";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = (props) => {
  return (
    <div className="project">
      <figure className="project__img-container">
        <a href={props.project.link} target="_blank" rel="noreferrer">
          <img src={props.project.image} alt={props.project.name} />
        </a>
      </figure>
      <div className="project__text">
        <h4>
          &lt;{props.project.name} /&gt; &nbsp;
          <a href={props.project.repo} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </h4>
        <p>{props.project.description}</p>
        <div className="project__tech-container">
          <p>&lt;Technologies & Tools/&gt;</p>
          <div className="project__tech">
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
