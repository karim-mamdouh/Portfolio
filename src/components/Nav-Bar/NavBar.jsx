import React, { useState } from "react";
import "./NavBar.scss";
import logoDark from "../../assets/images/logo_dark.png";
import logoLight from "../../assets/images/logo_light.png";
import resume from "../../assets/Karim Mamdouh Mohamed Resume.pdf";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  let [isDark, setIsDark] = useState(false);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      setIsDark(event.matches);
    });

  // window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  //   ? setIsDark(true)
  //   : setIsDark(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <NavLink to="/">
          <figure>
            <img alt="logo" src={logoDark} className="navbar__logo" />
          </figure>
        </NavLink>
        <ul className="navbar__links">
          <li className="navbar__link">
            <NavLink to="/" className="navbar__anchor" activeClassName="active">
              <code>&lt;Home /&gt;</code>
            </NavLink>
          </li>
          <li className="navbar__link">
            <NavLink
              to="/about"
              className="navbar__anchor"
              activeClassName="active"
            >
              <code>&lt;About /&gt;</code>
            </NavLink>
          </li>
          <li className="navbar__link">
            <NavLink
              to="/resume"
              className="navbar__anchor"
              activeClassName="active"
            >
              <code>&lt;Resume /&gt;</code>
            </NavLink>
          </li>
          <li>
            <a
              href={resume}
              download="Karim Mamdouh Mohamed Resume.pdf"
              className="navbar__download"
            >
              <button className="navbar__download-btn">Download CV</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
