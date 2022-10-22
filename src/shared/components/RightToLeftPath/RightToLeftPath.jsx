//React
import PropTypes from "prop-types";

const RightToLeftPath = ({ title }) => {
  return (
    <>
      <div className="path__left-container">
        <div className="path__left"></div>
      </div>
      <div className="path__circle-container">
        <div className="path__circle">
          <h2>&lt;{title} /&gt;</h2>
        </div>
      </div>
      <div className="path__right-container">
        <div className="path__right"></div>
      </div>
    </>
  );
};

//Props type validation
RightToLeftPath.propTypes = {
  title: PropTypes.string.isRequired,
};

export default RightToLeftPath;
