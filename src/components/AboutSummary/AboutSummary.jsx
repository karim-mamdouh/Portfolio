//React
import React from "react";
//Scss styling file
import "./AboutSummary.scss";
//Components
import IDEContainer from "../IDEContainer/IDEContainer";

const AboutSummary = (props) => {
  //classes variable to pass classes externally
  const classes = "summary " + (props.className ? props.className : "");
  return (
    <IDEContainer className={classes}>
      <div className="summary__container">
        <p className="summary__title">&lt;About Me /&gt;</p>
        {/* Welcome message */}
        <div className="summary__hello">
          <h1 className="summary__hello-large">Hello World ^_^</h1>
          <h1 className="summary__hello-small">
            <span>Hello </span>
            <span>World </span>
            <span>^_^</span>
          </h1>
        </div>
        {/* About me */}
        <p>
          I'm an enthusiastic and detail-oriented Frontend Software Engineer
          with experience in troubleshooting, logical thinking and customer
          satisfaction seeking an entry-level position with Company to use my
          skills in coding, troubleshooting complex problems, and assisting in
          the timely completion of projects.
        </p>
      </div>
    </IDEContainer>
  );
};

export default AboutSummary;
