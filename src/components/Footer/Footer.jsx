//React
import React from "react";
//Scss styling file
import "./Footer.scss";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faHackerrank,
  faFreeCodeCamp,
} from "@fortawesome/free-brands-svg-icons";
import leet from "../../assets/images/leetcode.svg";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Title */}
      <p>Find me in:</p>
      <div className=" footer__container">
        {/* Linkedin */}
        <a
          href="https://www.linkedin.com/in/karim-mamdouh-084b25141/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        {/* Github */}
        <a
          href="https://github.com/karim-mamdouh"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        {/* Hackerrank */}
        <a
          href="https://www.hackerrank.com/karim_mamdouh_51"
          target="_blank"
          rel="noreferrer"
          title="HackerRank"
        >
          <FontAwesomeIcon icon={faHackerrank} />
        </a>
        {/* Freecodecamp */}
        {/* <a
          href="https://www.freecodecamp.org/karim-mamdouh"
          target="_blank"
          rel="noreferrer"
          title="Free Code Camp"
        >
          <FontAwesomeIcon icon={faFreeCodeCamp} />
        </a> */}
        {/* Leetcode */}
        {/* <a
          href="https://leetcode.com/user0171C/"
          target="_blank"
          rel="noreferrer"
          title="Leet Code"
        >
          <img src={leet} alt="leetcode-logo" />
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
