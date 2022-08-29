import React from "react";
import angular from "../../assets/images/skills/angular.png";
import react from "../../assets/images/skills/reactjs.png";
import profile from "../../assets/images/profile.jpg";
import "./Hero.scss";

const Hero = () => {
  return (
    <header className="hero">
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
      <div className="hero__shape">
        <figure className="hero__profile">
          <img alt="profile" src={profile} />
        </figure>
        <div className="hero__circle">
          <figure className="hero__skill react">
            <img alt="reactjs" src={react} />
          </figure>
          <figure className="hero__skill angular">
            <img alt="angular" src={angular} />
          </figure>
        </div>
      </div>
    </header>
  );
};

export default Hero;
