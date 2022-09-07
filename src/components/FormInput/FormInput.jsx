//React
import React from "react";
//Scss styling file
import "./FormInput.scss";

const FormInput = ({ label, register, validations, type, placeholder }) => {
  if (type === "textarea") {
    return (
      //Textarea input
      <>
        <label className="label">
          <code>&lt;{label} /&gt;</code>
        </label>
        <textarea
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
        className="input"
        type={type}
        placeholder={placeholder}
        {...register(label, validations)}
      />
    </>
  );
};

export default FormInput;
