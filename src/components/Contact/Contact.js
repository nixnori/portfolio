import React, { useState } from "react";
import "./Contact.scss";
import linkedin from "../../assets/images/linkedin.svg";
import github from "../../assets/images/github.svg";
import mail from "../../assets/images/mail.svg";

const Contact = (props) => {
  const [contactLinks] = useState([
    {
      link: "http://www.linkedin.com/in/nikki-noriega",
      icon: linkedin,
      iconAlt: "linkedin",
    },
    { link: "http://github.com/nixnori", icon: github, iconAlt: "github" },
    { link: "mailto:nikkinoriega@outlook.com", icon: mail, iconAlt: "mail" },
  ]);

  return (
    <div className="contact">
      {contactLinks.map((link) => {
        return (
          <a href={link.link} target="blank">
            <img
              className={`contact__link ${props.className}`}
              src={link.icon}
              alt={link.iconAlt}
            />
          </a>
        );
      })}
    </div>
  );
};

export default Contact;
