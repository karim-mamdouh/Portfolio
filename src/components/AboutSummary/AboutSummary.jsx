import React from "react";
import IDEContainer from "../IDEContainer/IDEContainer";
import "./AboutSummary.scss";

const AboutSummary = (props) => {
  const classes = "summary " + (props.className ? props.className : "");
  return (
    <IDEContainer className={classes}>
      <div className="summary__container">
        <p className="summary__title">&lt;About Me /&gt;</p>
        <div className="summary__hello">
          <h1>Hello World ^_^</h1>
        </div>
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
