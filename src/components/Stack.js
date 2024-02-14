import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNodeJs, faJs, faHtml5, faCss3Alt, faReact, faSass } from "@fortawesome/free-brands-svg-icons";

const Stack = () => {
  return (
    <section className="stack">
      <FontAwesomeIcon icon={faHtml5} className="icon" />
      <FontAwesomeIcon icon={faCss3Alt} className="icon" />
      <FontAwesomeIcon icon={faSass} className="icon" />
      <FontAwesomeIcon icon={faJs} className="icon" />
      <FontAwesomeIcon icon={faReact} className="icon" />
      {/* <FontAwesomeIcon icon={faNodeJs} className="icon" /> */}
    </section>
  );
};

export default Stack;
