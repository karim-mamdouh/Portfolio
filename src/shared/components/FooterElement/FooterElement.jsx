//React
import PropTypes from "prop-types";
//Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterElement = ({ href, title, icon, children }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" title={title}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
    </a>
  );
};

//Props type validation
FooterElement.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.object,
};

export default FooterElement;
