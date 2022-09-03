//React
import React from "react";
//Scss styling file
import "./Home.scss";
//Components
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Path from "../../components/Path/Path";

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
      <Projects />
      {/* Straight path */}
      <Path title="Contact us" straight={true} className="home__contact-path" />
    </section>
  );
};

export default Home;
