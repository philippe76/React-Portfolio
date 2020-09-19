import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import {
  faNodeJs,
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const Stack = () => {
  return (
    <div className="stack">
      <h4>
        <FontAwesomeIcon icon={faCogs} className="icon" /> Ma stack
      </h4>
      <FontAwesomeIcon icon={faHtml5} className="icon" />
      <FontAwesomeIcon icon={faCss3Alt} className="icon" />
      <FontAwesomeIcon icon={faJs} className="icon" />
      <FontAwesomeIcon icon={faNodeJs} className="icon" />
      <FontAwesomeIcon icon={faReact} className="icon" />
    </div>
  );
};

export default Stack;
