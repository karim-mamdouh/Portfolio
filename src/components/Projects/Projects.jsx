//React
import React, { useState } from "react";
//Scss styling file
import "./Projects.scss";
//Components
import IDEContainer from "../IDEContainer/IDEContainer";
import ProjectCard from "../ProjectCard/ProjectCard";
//Data
import { projects } from "../../data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const incrementIndex = () => {
    if (projectIndex === projects.length - 1) {
      setProjectIndex(0);
    } else {
      setProjectIndex((state) => ++state);
    }
  };
  const decrementIndex = () => {
    if (projectIndex === 0) {
      setProjectIndex(projects.length - 1);
    } else {
      setProjectIndex((state) => --state);
    }
  };
  return (
    <IDEContainer>
      <div className="projects">
        <div className="projects__icon-container">
          <button onClick={decrementIndex}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
        </div>
        <div className="projects__container">
          <ProjectCard project={projects[projectIndex]} />
        </div>
        <div className="projects__icon-container">
          <button onClick={incrementIndex}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </IDEContainer>
  );
};

export default Projects;
