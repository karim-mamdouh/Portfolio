//React
import PropTypes from "prop-types";
//Scss styling file
import "./ProjectCard.scss";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ animationLeft, animationRight, project }) => {
  //classes variable to pass classes externally, and adds/removes animations based on animation direction
  let classes =
    (animationLeft ? "animation-left " : "") +
    (animationRight ? "animation-right " : "") +
    "project";

  return (
    <div className={classes}>
      {/* Website preview image */}
      <figure className="project__img-container">
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          title="Visit Webpage"
        >
          <img src={project.image} alt={project.name} />
        </a>
      </figure>
      <div className="project__text">
        {/* Project title */}
        {/* Large screen title */}
        <h4>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            title="Visit Webpage"
          >
            &lt;{project.name} /&gt; &nbsp;
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            title="Visit Repo"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </h4>
        {/* Small screen title */}
        <h4>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            title="Visit Webpage"
          >
            &lt;{project.name} /&gt; &nbsp;
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </h4>
        <h5>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            title="Visit Repo"
          >
            &lt;GitHub Repo /&gt; &nbsp;
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </h5>
        {/* Project description */}
        <p>{project.description}</p>
        <div className="project__tech-container">
          {/* Technologies used section */}
          <p>&lt;Technologies & Tools/&gt;</p>
          <div className="project__tech">
            {/* Technologies images */}
            {project.technologies.map((element, index) => (
              <a
                href={element.link}
                target="_blank"
                rel="noreferrer"
                key={index}
                title={element.name}
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

//Props type validation
ProjectCard.propTypes = {
  animationLeft: PropTypes.bool,
  animationRight: PropTypes.bool,
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
