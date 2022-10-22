//React
import PropTypes from "prop-types";

const StraightPath = ({ title }) => {
  return (
    <>
      <div className="path__line-container">
        <div className="path__line"></div>
        <div className="path__circle-container">
          <div className="path__circle">
            <h2>&lt;{title} /&gt;</h2>
          </div>
        </div>
        <div className="path__line"></div>
      </div>
    </>
  );
};

//Props type validation
StraightPath.propTypes = {
  title: PropTypes.string.isRequired,
};

export default StraightPath;
