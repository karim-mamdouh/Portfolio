import React from "react";
import IDEContainer from "../IDEContainer/IDEContainer";
import "./AboutInfo.scss";
import {
  faUser,
  faEnvelope,
  faPhone,
  faCalendar,
  faLocationDot,
  faPersonMilitaryRifle,
} from "@fortawesome/free-solid-svg-icons";
import InfoCard from "../InfoCard/InfoCard";

const AboutInfo = (props) => {
  const classes = "info " + (props.className ? props.className : "");
  return (
    <IDEContainer className={classes}>
      <p>&lt;Peronal Information /&gt;</p>
      <InfoCard icon={faUser} text="Karim Mamdouh Mohamed" head="Name: " />
      <InfoCard
        icon={faEnvelope}
        anchor={true}
        href="mailto:karim.mamdouh.594@gmail.com"
        text="karim.mamdouh.594@gmail.com"
        head="E-mail: "
      />
      <InfoCard
        icon={faPhone}
        anchor={true}
        href="tel:+201159100996"
        text="+20 115-910-0996"
        head="Phone: "
      />
      <InfoCard icon={faCalendar} text="05-07-1994" head="Date of Birth: " />
      <InfoCard icon={faLocationDot} text="Cairo, Egypt" head="City: " />

      <InfoCard
        icon={faPersonMilitaryRifle}
        text="Exempted"
        head="Military Status: "
      />
    </IDEContainer>
  );
};

export default AboutInfo;
