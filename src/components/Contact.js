import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="box" id="contact">
      <h2 className="box-title big-title">{"[ Me contacter ]"}</h2>
      <a
        href="https://github.com/philippe76"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/philippe-lanougadere/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://twitter.com/I_m_your_dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href="mailto:p.lanougadere@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTelegramPlane} />
      </a>
      <a href="tel:33660803766">
        <FontAwesomeIcon icon={faMobileAlt} />
      </a>
    </div>
  );
};

export default Contact;
