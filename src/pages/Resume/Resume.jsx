//Scss styling file
import "./Resume.scss";
//Components
import ExperienceCard from "./components/ExperienceCard/ExperienceCard";
import IDEContainer from "../../shared/components/IDEContainer/IDEContainer";
//Data
import { experience } from "../../config/db/experience";

const Resume = () => {
  return (
    <section className="resume">
      <IDEContainer className="resume__container">
        {/* Title */}
        <h1>&lt;Resume /&gt;</h1>
        {/* Work experience section */}
        <div className="resume__experiences">
          <div className="resume__section">
            <h2>&lt;Work Experience /&gt;</h2>
            {experience.work.map((element) => (
              <ExperienceCard experience={element} key={element.id} />
            ))}
          </div>
          {/* Education section */}
          <div className="resume__section">
            <h2>&lt;Education /&gt;</h2>
            {experience.education.map((element) => (
              <ExperienceCard experience={element} key={element.id} />
            ))}
          </div>
        </div>
      </IDEContainer>
    </section>
  );
};

export default Resume;
