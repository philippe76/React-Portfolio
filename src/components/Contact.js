import React from "react";
import { FaSquareGithub, FaLinkedin, FaEnvelope, FaSquarePhoneFlip, FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="box" id="contact">
      <a
        href="https://www.linkedin.com/in/philippe-lanougadere/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/philippe76"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSquareGithub />
      </a>
      {/* <a
        href="https://twitter.com/I_m_your_dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSquareXTwitter />
      </a> */}
      <a
        href="mailto:p.lanougadere@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope />
      </a>
      <a href="tel:33660803766">
        <FaSquarePhoneFlip />
      </a>
    </section>
  );
};

export default Contact;
