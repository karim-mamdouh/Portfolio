//React
import React from "react";
import { useState } from "react";
//Scss styling file
import "./ContactMe.scss";
//Components
import IDEContainer from "../IDEContainer/IDEContainer";
import ContactForm from "../ContactForm/ContactForm";
import FormResult from "../FormResult/FormResult";

const ContactMe = () => {
  const [requestResult, setRequestResult] = useState(null);
  //Function sets value of requestResult, called on form submit
  const showRequestResult = (result) => {
    setRequestResult(result);
  };
  return (
    <IDEContainer>
      {/* Contact form */}
      {requestResult === null && <ContactForm result={showRequestResult} />}
      {/* Form submit result */}
      {requestResult !== null && <FormResult result={requestResult} />}
    </IDEContainer>
  );
};

export default ContactMe;
