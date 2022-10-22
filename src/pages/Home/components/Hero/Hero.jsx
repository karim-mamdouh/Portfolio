//React
import PropTypes from "prop-types";
//Scss styling file
import "./Hero.scss";
//Images
import angular from "../../../../assets/images/skills/angular.png";
import react from "../../../../assets/images/skills/reactjs.png";
import js from "../../../../assets/images/skills/javascript.png";
import profileLight from "../../../../assets/images/profile_light.png";
import profileDark from "../../../../assets/images/profile_dark.png";

const Hero = ({ isDark }) => {
  return (
    <header className="hero">
      {/* Welcome text */}
      <div className="hero__text">
        <code className="hero__html">&lt;html&gt;</code>
        <code className="hero__body">&lt;body&gt;</code>
        <code className="hero__h1">&lt;h1&gt;</code>
        <h1 className="hero__title">
          Hello 👋, I'm <span className="hero__name">Karim Mamdouh</span>
        </h1>
        <code className="hero__h1">&lt;/h1&gt;</code>
        <div>
          <code className="hero__p">&lt;p&gt;</code>
          <span className="hero__subtitle">Frontend Developer</span>
          <code className="hero__p">&lt;/p&gt;</code>
        </div>
        <code className="hero__body">&lt;/body&gt;</code>
        <code className="hero__html">&lt;/html&gt;</code>
      </div>
      {/* Rotating circle section */}
      <div className="hero__shape">
        {/* Personal image */}
        <figure className="hero__profile">
          <img
            alt="profile"
            src={isDark ? profileDark : profileLight}
            id="portfolio"
          />
        </figure>
        <div className="hero__circle">
          {/* React skill */}
          <figure className="hero__skill react">
            <img alt="reactjs" src={react} />
          </figure>
          {/* Angular skill */}
          <figure className="hero__skill angular">
            <img alt="angular" src={angular} />
          </figure>
          {/* Javascript skill */}
          <figure className="hero__skill js">
            <img alt="js" src={js} />
          </figure>
        </div>
      </div>
    </header>
  );
};

//Props type validation
Hero.propTypes = {
  isDark: PropTypes.bool.isRequired,
};

export default Hero;
