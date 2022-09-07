//React
import React from "react";
//Scss styling file
import "./Home.scss";
//Components
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Path from "../../components/Path/Path";
import ContactMe from "../../components/ContactMe/ContactMe";

const Home = () => {
  return (
    <section className="home">
      {/* Hero section */}
      <Hero />
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

export default Home;
