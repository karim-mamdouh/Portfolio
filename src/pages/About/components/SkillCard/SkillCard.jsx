//React
import PropTypes from "prop-types";
//Scss styling file
import "./SkillCard.scss";

//Wraps the skill image
const SkillCard = ({ name, image }) => {
  return (
    <div className="skill-card" title={name}>
      <img alt="skill-logo" src={image} />
    </div>
  );
};

//Props type validation
SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SkillCard;
