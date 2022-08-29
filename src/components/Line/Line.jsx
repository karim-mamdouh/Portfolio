import React from "react";
import "./Line.scss";

const Line = (props) => {
  const classes = "line " + (props.className ? props.className : "");

  return (
    <div className={classes}>
      <div className={props.childClassName ? props.childClassName : ""}></div>
    </div>
  );
};

export default Line;
