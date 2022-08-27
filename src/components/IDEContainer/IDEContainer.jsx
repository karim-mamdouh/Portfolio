import React from "react";
import "./IDEContainer.scss";

const IDEContainer = (props) => {
  const classes = "ide-container " + props.className;
  return (
    <div className={classes}>
      <div className="ide-container__header">
        <div className="red-circle"></div>
        <div className="orange-circle"></div>
        <div className="green-circle"></div>
      </div>
      <div className="ide-container__body">{props.children}</div>
    </div>
  );
};

export default IDEContainer;
