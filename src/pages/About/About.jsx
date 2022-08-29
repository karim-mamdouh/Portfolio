import React from "react";
import "./About.scss";
import AboutSummary from "../../components/AboutSummary/AboutSummary";
import AboutInfo from "../../components/AboutInfo/AboutInfo";
import AboutSkills from "../../components/AboutSkills/AboutSkills";
import Line from "../../components/Line/Line";

const About = () => {
  return (
    <section className="about">
      <AboutSummary className="about__summary" />
      <div className="about__line1">
        <div className="about__line-container">
          <Line
            className="about__horiz-line"
            childClassName="about__horiz-line"
          />
        </div>
      </div>
      <AboutInfo className="about__info" />
      <div className="about__line2">
        <div className="about__line-container">
          <Line className="about__vert-line" />
        </div>
      </div>
      <AboutSkills className="about__skills" />
    </section>
  );
};

export default About;
