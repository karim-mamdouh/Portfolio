//React
import PropTypes from "prop-types";
//Components
import StraightPath from "../StraightPath/StraightPath";
import LeftToRightPath from "../LeftToRightPath/LeftToRightPath";
import RightToLeftPath from "../RightToLeftPath/RightToLeftPath";
//Scss styling file
import "./Path.scss";

const Path = ({ className, startLeft, startRight, straight, title }) => {
  //classes variable to pass classes externally
  let classes = "path " + (className ? className : "");
  //If startLeft transform class is added
  if (startLeft) classes += " transform";

  return (
    <div className={classes}>
      {startRight && <RightToLeftPath title={title} />}

      {straight && <StraightPath title={title} />}

      {startLeft && <LeftToRightPath title={title} />}
    </div>
  );
};

//Props type validation
Path.propTypes = {
  className: PropTypes.string,
  startLeft: PropTypes.bool,
  startRight: PropTypes.bool,
  straight: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default Path;
