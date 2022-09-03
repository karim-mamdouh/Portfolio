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
    <div className="footer">
      <p>Find me in:</p>
      <div className=" footer__container">
        <a
          href="https://www.linkedin.com/in/karim-mamdouh-084b25141/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/karim-mamdouh"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.hackerrank.com/karim_mamdouh_51"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faHackerrank} />
        </a>
        <a
          href="https://www.freecodecamp.org/karim-mamdouh"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFreeCodeCamp} />
        </a>
        <a
          href="https://leetcode.com/user0171C/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={leet} alt="leetcode-logo" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
