//React
import { useState } from "react";
import PropTypes from "prop-types";
//Scss styling file
import "./Projects.scss";
//Components
import IDEContainer from "../../../../shared/components/IDEContainer/IDEContainer";
import ProjectCard from "../ProjectCard/ProjectCard";
//Data
import { projects } from "../../../../config/db/projects";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Projects = ({ className }) => {
  const classes = className ? className : "";
  //Current viewed project index
  const [projectIndex, setProjectIndex] = useState(0);
  //Flag to activate animation in left direction on button click
  const [animationLeft, setAnimationLeft] = useState(false);
  //Flag to activate animation in right direction on button click
  const [animationRight, setAnimationRight] = useState(false);
  //Function called when user clicks right button to go to next project,
  //It sets animation direction flag to true then to false after 1sec, then increments current index
  const incrementIndex = () => {
    setAnimationLeft(true);
    setTimeout(() => {
      setAnimationLeft(false);
    }, 1000);
    setTimeout(() => {
      //If current index is last element of array, it sets it to 0
      if (projectIndex === projects.length - 1) {
        setProjectIndex(0);
      } else {
        setProjectIndex((state) => ++state);
      }
    }, 500);
  };
  //Function called when user clicks right button to go to previous project,
  //It sets animation direction flag to true then to false after 1sec, then decrements current index
  const decrementIndex = () => {
    setAnimationRight(true);
    setTimeout(() => {
      setAnimationRight(false);
    }, 1000);
    setTimeout(() => {
      //If current index is 0 it sets it to last element in array
      if (projectIndex === 0) {
        setProjectIndex(projects.length - 1);
      } else {
        setProjectIndex((state) => --state);
      }
    }, 500);
  };

  return (
    <IDEContainer className={classes}>
      <div className="projects">
        <div className="projects__icon-container">
          {/* Previous project button */}
          <button onClick={decrementIndex}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
        </div>
        {/* Current viewed project */}
        <div className="projects__container">
          <ProjectCard
            animationLeft={animationLeft}
            animationRight={animationRight}
            project={projects[projectIndex]}
          />
        </div>
        <div className="projects__icon-container">
          {/* Next project button */}
          <button onClick={incrementIndex}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </IDEContainer>
  );
};

//Props type validation
Projects.propTypes = {
  className: PropTypes.string,
};

export default Projects;
