import React, { useState } from "react";
import "./NavBar.scss";
import logoDark from "../../assets/images/logo_dark.png";
import logoLight from "../../assets/images/logo_light.png";
import resume from "../../assets/Karim Mamdouh Mohamed Resume.pdf";

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
        <a>
          <figure>
            <img alt="logo" src={logoDark} className="navbar__logo" />
          </figure>
        </a>
        <ul className="navbar__links">
          <li className="navbar__link">
            <a>&lt;Home /&gt;</a>
          </li>
          <li className="navbar__link">
            <a>&lt;About /&gt;</a>
          </li>
          <li className="navbar__link">
            <a>&lt;Resume /&gt;</a>
          </li>
          <li className="navbar__link">
            <a>&lt;About /&gt;</a>
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
