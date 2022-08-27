import React from "react";
import Hero from "../../components/Hero/Hero";
import IDEContainer from "../../components/IDEContainer/IDEContainer";
import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <IDEContainer>
        <p>Hello!</p>
      </IDEContainer>
    </section>
  );
};

export default Home;
