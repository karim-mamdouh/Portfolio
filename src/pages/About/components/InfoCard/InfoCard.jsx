//React
import PropTypes from "prop-types";
//Scss styling file
import "./InfoCard.scss";
//Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoCard = ({ anchor, href, icon, head, text }) => {
  //If anchor optin is selected the returned content is wrapped with anchor tag
  //with entered href content
  if (anchor) {
    return (
      <div className="info-card">
        <a href={href}>
          <FontAwesomeIcon icon={icon} className="info-card__icon" />
          <p className="info-card__text">
            <span>{head}</span>
            {text}
          </p>
        </a>
      </div>
    );
  }
  //Otherwise it's returned as normal text
  return (
    <div className="info-card">
      <FontAwesomeIcon icon={icon} className="info-card__icon" />
      <p className="info-card__text">
        <span>{head}</span>
        {text}
      </p>
    </div>
  );
};

//Props type validation
InfoCard.propTypes = {
  anchor: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  head: PropTypes.string.isRequired,
};

export default InfoCard;
