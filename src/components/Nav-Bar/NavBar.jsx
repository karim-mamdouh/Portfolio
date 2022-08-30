import React, { useState } from "react";
import "./NavBar.scss";
import logoDark from "../../assets/images/logo_dark.png";
import logoLight from "../../assets/images/logo_light.png";
import resume from "../../assets/Karim Mamdouh Mohamed Resume.pdf";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [themeState, setThemeState] = useState(true);
  const [showCollapse, setShowCollapse] = useState(false);
  const changeTheme = () => {
    if (themeState) {
      document.documentElement.setAttribute("data-theme", "light");
      document.getElementById("logo").src = logoLight;
      setThemeState(false);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      document.getElementById("logo").src = logoDark;
      setThemeState(true);
    }
  };
  const alterCollapse = () => {
    const container = document.querySelectorAll("li");
    if (!showCollapse) {
      container.forEach((element, index) => {
        if (index !== 0) {
          element.style.animationName = "showCollapse";
          element.style.animationDuration = "1s";
          element.style.display = "flex";
        }
      });
    } else {
      container.forEach((element, index) => {
        if (index !== 0) {
          element.style.animationName = "hideCollapse";
          element.style.animationDuration = "1s";
          element.style.display = "none";
        }
      });
    }
    setShowCollapse((state) => !state);
  };
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <NavLink to="/" className="">
          <figure>
            <img alt="logo" src={logoDark} className="navbar__logo" id="logo" />
          </figure>
        </NavLink>
        <button className="navbar__collapse" onClick={alterCollapse}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul className="navbar__links" id="links">
          <li className="navbar__link">
            <DarkModeToggle
              checked={themeState}
              size={60}
              onChange={changeTheme}
              className="navbar__dark-toggle"
            />
          </li>
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
