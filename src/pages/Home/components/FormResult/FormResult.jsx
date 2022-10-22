//React
import PropTypes from "prop-types";
//Scss styling file
import "./FormResult.scss";
//Icons
import {
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormResult = ({ result }) => {
  return (
    <div className="form-success">
      {/* Success message */}
      {result && (
        <>
          <FontAwesomeIcon
            className="form-success__success"
            icon={faCheckCircle}
          />
          <p>
            Thanks for contacting me, I will reply on your request / question
            ASAP
          </p>
        </>
      )}
      {/* Fail message */}
      {!result && (
        <>
          <FontAwesomeIcon
            className="form-success__fail"
            icon={faXmarkCircle}
          />
          <p>
            Failed to send your request, please use your email until we solve
            this issue
          </p>
        </>
      )}
    </div>
  );
};

//Props type validation
FormResult.propTypes = {
  result: PropTypes.bool,
};

export default FormResult;
