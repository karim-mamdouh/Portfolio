//React
import React from "react";
import { useForm } from "react-hook-form";
//Scss styling file
import "./ContactForm.scss";
//Components
import IDEContainer from "../IDEContainer/IDEContainer";
import FormInput from "../FormInput/FormInput";
import axios from "axios";

const baseURL = "https://api.emailjs.com/api/v1.0/email/send";

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const formSubmit = (data) => {
    let formData = {
      service_id: "service_grbhd9l",
      template_id: "template_v7xf3dr",
      user_id: "UUYwVdPAR-Ml5rTat",
      template_params: {
        from_name: data.Name,
        from_email: data.Email,
        from_phone: data.Phone,
        message: data.Message,
      },
    };
    axios
      .post(baseURL, formData)
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <IDEContainer>
      <div className="contact-form">
        <div className="contact-form__text">
          <h4>Have a project!</h4>
          <h4>Let's discuss</h4>
          <p>Thank you for getting in touch</p>
          <p>Kindly fill the form</p>
        </div>
        <form
          className="contact-form__form"
          onSubmit={handleSubmit(formSubmit)}
        >
          <FormInput
            type="text"
            placeholder="Your full name"
            label="Name"
            validations={{ required: true }}
            register={register}
          />
          {errors.Name && <p className="form__error">This field is required</p>}
          <FormInput
            type="text"
            placeholder="email@address.com"
            label="Email"
            validations={{
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
            }}
            register={register}
          />
          {errors.Email?.type === "required" && (
            <p className="form__error">This field is required</p>
          )}
          {errors.Email?.type === "pattern" && (
            <p className="form__error">Wrong email format</p>
          )}
          <FormInput
            type="tel"
            placeholder="+xx xxxxxxxx"
            label="Phone"
            validations={{ required: true, minLength: 11, maxLength: 11 }}
            register={register}
          />
          {errors.Phone?.type === "required" && (
            <p className="form__error">This field is required</p>
          )}
          {(errors.Phone?.type === "minLength" ||
            errors.Phone?.type === "maxLength") && (
            <p className="form__error">Phone number must be 11 digits</p>
          )}
          <FormInput
            type="textarea"
            placeholder="What do you have in mind?"
            label="Message"
            validations={{ required: true }}
            register={register}
          />
          {errors.Message && (
            <p className="form__error">This field is required</p>
          )}
          <button type="submit" className="contact-form__submit-btn">
            Submit
          </button>
        </form>
      </div>
    </IDEContainer>
  );
};

export default ContactForm;
