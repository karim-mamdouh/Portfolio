//React
import PropTypes from "prop-types";
//Scss styling file
import "./ExperienceCard.scss";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience">
      {/* Timeline shape */}
      <div className="experience__shape">
        <div className="circle"></div>
        <div className="line"></div>
      </div>
      {/* Experience content */}
      <div className="experience__content">
        {/* Date */}
        <p className="experience__subtitle">{experience.date}</p>
        {/* Title */}
        <h3 className="experience__title">{experience.title}</h3>
        {/* Company */}
        <p className="experience__subtitle">{experience.company}</p>
        {/* Description block */}
        <div className="experience__body">
          {experience.details &&
            experience.details.map((element, index) => (
              <p key={index}>{element}</p>
            ))}
        </div>
      </div>
    </div>
  );
};

//Props type validation
ExperienceCard.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ExperienceCard;
