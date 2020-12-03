import React, { useState } from "react";
import CV from "../images/CV.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import PatchWork from "./PatchWork";

const Cv = () => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  const download = {
    display: hover ? "block" : "none",
  };

  const cvBackground = {
    backgroundColor: hover && "rgba(0, 0, 0, 0.6)",
    position: hover && "absolute",
  };

  return (
    <>
      <PatchWork />
      <section className="box" id="cv">
        <h2 className="big-title"> {"[ Mon CV ]"} </h2>
        <div className="cv-container">
          <p className="paragraph">
            <code>
              {`const hard_skills = {                
  HTML: 5,
  CSS: [3, "Bootstrap"],
  JavaScript: ["ES6", "jQuery", “ReactJs", “NodeJs"],
  responsive_design: true,
  version_control: "Git",
  IDE: "Visual Studio Code", 	
};
const soft_skills = ["Bosseur", "Positif", "Curieux", "Tenace", "Cooperatif"];

if (interested) {
	download(cv).then( infos => call_me(infos.tel) )
}; `}
            </code>
          </p>

          <div className="cv-pic">
            <div
              onMouseOver={handleHover}
              onMouseOut={handleHover}
              style={cvBackground}
              className="cv-background"
            >
              <div className="cv-download" style={download}>
                <a href={CV} download="Lanougadere_Philippe_CV">
                  <FontAwesomeIcon icon={faDownload} />
                </a>
                <a
                  href={process.env.PUBLIC_URL + "/Lanougadere_Philippe_CV.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cv;
