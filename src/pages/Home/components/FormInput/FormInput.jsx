//React
import PropTypes from "prop-types";
//Scss styling file
import "./FormInput.scss";

const FormInput = ({
  label,
  register,
  validations,
  type,
  placeholder,
  error,
}) => {
  if (type === "textarea") {
    return (
      //Textarea input
      <>
        <label className="label">
          <code>&lt;{label} /&gt;</code>
        </label>
        <textarea
          style={{
            borderColor: error ? "#d2534f" : "",
            boxShadow: error ? "0 0 0 0.2rem #d2534f" : "",
          }}
          className="input"
          placeholder={placeholder}
          {...register(label, validations)}
        />
      </>
    );
  }
  return (
    //Normal input field
    <>
      <label className="label">
        <code>&lt;{label} /&gt;</code>
      </label>
      <input
        style={{
          borderColor: error ? "#d2534f" : "",
          boxShadow: error ? "0 0 0 0.2rem #d2534f" : "",
        }}
        className="input"
        type={type}
        placeholder={placeholder}
        {...register(label, validations)}
      />
    </>
  );
};

//Props type validation
FormInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.object,
  validations: PropTypes.object,
  label: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};

export default FormInput;
