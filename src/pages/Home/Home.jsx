//React
import PropTypes from "prop-types";
//Scss styling file
import "./Home.scss";
//Components
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Path from "../../shared/components/Path/Path";
import ContactMe from "./components/ContactMe/ContactMe";

const Home = ({ isDark }) => {
  return (
    <section className="home">
      {/* Hero section */}
      <Hero isDark={isDark} />
      {/* Right to left path, appear on large screens only */}
      <Path
        title="Projects"
        startRight={true}
        className="home__projects-path"
      />
      {/* Straight path, appear in small screens only */}
      <Path
        title="Projects"
        straight={true}
        className="home__projects-path-vert"
      />
      {/* Projects section */}
      <Projects className="home__projects" />
      <Path
        title="Contact Me"
        startLeft={true}
        className="home__projects-path"
      />
      {/* Straight path */}
      <Path
        title="Contact Me"
        straight={true}
        className="home__projects-path-vert"
      />
      {/* Contact me section */}
      <ContactMe />
    </section>
  );
};

//Props type validation
Home.propTypes = {
  isDark: PropTypes.bool.isRequired,
};

export default Home;
