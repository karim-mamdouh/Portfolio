//Scss styling file
import "./Footer.scss";
//Icons
import {
  faLinkedin,
  faGithub,
  faHackerrank,
  faFreeCodeCamp,
} from "@fortawesome/free-brands-svg-icons";
import leet from "../../../assets/images/leetcode.svg";
//Components
import FooterElement from "../FooterElement/FooterElement";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Title */}
      <p>Find me in:</p>
      <div className=" footer__container">
        {/* Linkedin */}
        <FooterElement
          icon={faLinkedin}
          title="LinkedIn"
          href="https://www.linkedin.com/in/karim-mamdouh-mohamed/"
        />
        {/* Github */}
        <FooterElement
          title="GitHub"
          href="https://github.com/karim-mamdouh"
          icon={faGithub}
        />
        {/* Hackerrank */}
        <FooterElement
          icon={faHackerrank}
          title="HackerRank"
          href="https://www.hackerrank.com/karim_mamdouh_51"
        />
        {/* Freecodecamp */}
        {/* <FooterElement
          icon={faFreeCodeCamp}
          title="Free Code Camp"
          href="https://www.freecodecamp.org/karim-mamdouh"
        /> */}
        {/* Leetcode */}
        {/* <FooterElement title="Leet Code" href="https://leetcode.com/user0171C/">
          <img src={leet} alt="leetcode-logo" />
        </FooterElement> */}
      </div>
    </footer>
  );
};

export default Footer;
