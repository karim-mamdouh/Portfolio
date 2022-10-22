//React
import PropTypes from "prop-types";
//Scss styling file
import "./Line.scss";

const Line = ({ className, childClassName }) => {
  //classes variable to pass classes externally
  const classes = "line " + (className ? className : "");

  return (
    <div className={classes}>
      <div className={childClassName ? childClassName : ""}></div>
    </div>
  );
};

//Props type validation
Line.propTypes = {
  className: PropTypes.string,
  childClassName: PropTypes.string,
};

export default Line;
