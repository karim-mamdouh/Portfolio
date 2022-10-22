//React
import PropTypes from "prop-types";
//Scss styling file
import "./IDEContainer.scss";

const IDEContainer = ({ className, children }) => {
  //classes variable to pass classes externally
  const classes = "ide-container " + (className ? className : "");
  return (
    <div className={classes}>
      <div className="ide-container__header">
        {/* Red window circle */}
        <div className="red-circle"></div>
        {/* Orange window circle */}
        <div className="orange-circle"></div>
        {/* Green window circle */}
        <div className="green-circle"></div>
      </div>
      {/* Container content */}
      <div className="ide-container__body">{children}</div>
    </div>
  );
};
//Props type validation
IDEContainer.propTypes = {
  className: PropTypes.string,
};

export default IDEContainer;
