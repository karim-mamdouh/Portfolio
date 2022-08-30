import React from "react";
//Scss styling file
import "./IDEContainer.scss";

const IDEContainer = (props) => {
  //classes variable to pass classes externally
  const classes = "ide-container " + props.className;
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
      <div className="ide-container__body">{props.children}</div>
    </div>
  );
};

export default IDEContainer;
