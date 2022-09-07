//React
import React from "react";
//Scss styling file
import "./Line.scss";

const Line = (props) => {
  //classes variable to pass classes externally
  const classes = "line " + (props.className ? props.className : "");
  //Returns a line
  return (
    <div className={classes}>
      <div className={props.childClassName ? props.childClassName : ""}></div>
    </div>
  );
};

export default Line;
