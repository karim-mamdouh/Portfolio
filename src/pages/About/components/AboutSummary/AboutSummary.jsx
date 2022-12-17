//React
import PropTypes from "prop-types";
//Scss styling file
import "./AboutSummary.scss";
//Components
import IDEContainer from "../../../../shared/components/IDEContainer/IDEContainer";

const AboutSummary = ({ className }) => {
  //classes variable to pass classes externally
  const classes = "summary " + (className ? className : "");
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
          satisfaction seeking to use my skills in coding, troubleshooting
          complex problems, learning new technologies and assisting in the
          timely completion of projects.
        </p>
      </div>
    </IDEContainer>
  );
};

//Props type validation
AboutSummary.propTypes = {
  className: PropTypes.string,
};

export default AboutSummary;
