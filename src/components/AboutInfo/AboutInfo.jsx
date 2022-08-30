import React from "react";
//Scss styling file
import "./AboutInfo.scss";
//Icons
import {
  faUser,
  faEnvelope,
  faPhone,
  faCalendar,
  faLocationDot,
  faPersonMilitaryRifle,
} from "@fortawesome/free-solid-svg-icons";
//Components
import IDEContainer from "../IDEContainer/IDEContainer";
import InfoCard from "../InfoCard/InfoCard";

//Contact information component
const AboutInfo = (props) => {
  //classes variable to pass classes externally
  const classes = "info " + (props.className ? props.className : "");
  return (
    <IDEContainer className={classes}>
      <p>&lt;Peronal Information /&gt;</p>
      {/* Name */}
      <InfoCard icon={faUser} text="Karim Mamdouh Mohamed" head="Name: " />
      {/* Email */}
      <InfoCard
        icon={faEnvelope}
        anchor={true}
        href="mailto:karim.mamdouh.594@gmail.com"
        text="karim.mamdouh.594@gmail.com"
        head="E-mail: "
      />
      {/* Phone number */}
      <InfoCard
        icon={faPhone}
        anchor={true}
        href="tel:+201159100996"
        text="+20 115-910-0996"
        head="Phone: "
      />
      {/* Date of birth */}
      <InfoCard icon={faCalendar} text="05-07-1994" head="Date of Birth: " />
      {/* City */}
      <InfoCard icon={faLocationDot} text="Cairo, Egypt" head="City: " />
      {/* Military status */}
      <InfoCard
        icon={faPersonMilitaryRifle}
        text="Exempted"
        head="Military Status: "
      />
    </IDEContainer>
  );
};

export default AboutInfo;
