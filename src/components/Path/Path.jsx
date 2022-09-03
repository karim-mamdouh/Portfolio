//React
import React from "react";
//Scss styling file
import "./Path.scss";

const Path = (props) => {
  //classes variable to pass classes externally
  let classes = "path " + (props.className ? props.className : "");
  //If startLeft transform class is added
  if (props.startLeft) classes += "transform";

  return (
    <div className={classes}>
      {/* Right to left path */}
      {props.startRight && (
        <>
          <div className="path__left-container">
            <div className="path__left"></div>
          </div>
          <div className="path__circle-container">
            <div className="path__circle">
              <h2>&lt;{props.title} /&gt;</h2>
            </div>
          </div>
          <div className="path__right-container">
            <div className="path__right"></div>
          </div>
        </>
      )}
      {/* Straight path */}
      {props.straight && (
        <>
          <div className="path__line-container">
            <div className="path__line"></div>
            <div className="path__circle-container">
              <div className="path__circle">
                <h2>&lt;{props.title} /&gt;</h2>
              </div>
            </div>
            <div className="path__line"></div>
          </div>
        </>
      )}
      {/* Left to right path */}
      {props.startLeft && (
        <>
          <div className="path__left-container">
            <div className="path__left"></div>
          </div>
          <div className="path__circle-container">
            <div className="path__circle">
              <h2>&lt;{props.title} /&gt;</h2>
            </div>
          </div>
          <div className="path__right-container">
            <div className="path__right"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Path;
