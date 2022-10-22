//Scss styling file
import "./About.scss";
//Components
import AboutSummary from "./components/AboutSummary/AboutSummary";
import AboutInfo from "./components/AboutInfo/AboutInfo";
import AboutSkills from "./components/AboutSkills/AboutSkills";
import Line from "../../shared/components/Line/Line";

const About = () => {
  return (
    <section className="about">
      {/* Summary section */}
      <AboutSummary className="about__summary" />
      {/* Horizontal line */}
      <div className="about__line1">
        <div className="about__line-container">
          <Line
            className="about__horiz-line"
            childClassName="about__horiz-line"
          />
        </div>
      </div>
      {/* Info section */}
      <AboutInfo className="about__info" />
      {/* Vertical line */}
      <div className="about__line2">
        <div className="about__line-container">
          <Line className="about__vert-line" />
        </div>
      </div>
      {/* Skills section */}
      <AboutSkills className="about__skills" />
    </section>
  );
};

export default About;
