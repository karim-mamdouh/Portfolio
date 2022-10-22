//React
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import axios from "axios";
//Scss styling file
import "./ContactForm.scss";
//Components
import FormInput from "../FormInput/FormInput";

//URL for sending contact email
const baseURL = "https://api.emailjs.com/api/v1.0/email/send";

const ContactForm = ({ result }) => {
  //Hook forms variables
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  //Function called on form submit, it creates an object with the template required]
  //by Email.js package, then sends a post request with data entered in form
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
    //Post request
    axios
      .post(baseURL, formData)
      .then(() => {
        result(true);
      })
      .catch(() => {
        result(false);
      });
  };

  return (
    <div className="contact-form">
      {/* Title */}
      <div className="contact-form__text">
        <h4>
          Have a project! <br /> Let's discuss
        </h4>
        <p>Thank you for getting in touch</p>
        <p>Kindly fill the form</p>
      </div>
      {/* Contact form */}
      <form className="contact-form__form" onSubmit={handleSubmit(formSubmit)}>
        {/* Name input */}
        <FormInput
          type="text"
          placeholder="Your full name"
          label="Name"
          validations={{ required: true }}
          register={register}
          error={errors.Name}
        />
        {/* Name validation message */}
        {errors.Name && <p className="form__error">This field is required</p>}
        {/* Email input */}
        <FormInput
          error={errors.Email}
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
        {/* Email validation messages */}
        {errors.Email?.type === "required" && (
          <p className="form__error">This field is required</p>
        )}
        {errors.Email?.type === "pattern" && (
          <p className="form__error">Wrong email format</p>
        )}
        {/* Phone input */}
        <FormInput
          error={errors.Phone}
          type="tel"
          placeholder="01234567890"
          label="Phone"
          validations={{ minLength: 11, maxLength: 11 }}
          register={register}
        />
        {/* Phone validation message */}
        {(errors.Phone?.type === "minLength" ||
          errors.Phone?.type === "maxLength") && (
          <p className="form__error">Phone number must be 11 digits</p>
        )}
        {/* Message input */}
        <FormInput
          error={errors.Message}
          type="textarea"
          placeholder="What do you have in mind?"
          label="Message"
          validations={{ required: true }}
          register={register}
        />
        {/* Message validation message */}
        {errors.Message && (
          <p className="form__error">This field is required</p>
        )}
        {/* Form submit button */}
        <button type="submit" className="contact-form__submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

//Props type validation
ContactForm.propTypes = {
  result: PropTypes.func.isRequired,
};

export default ContactForm;
