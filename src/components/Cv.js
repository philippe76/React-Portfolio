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
    borderRadius: "2%",
    height: "15rem",
    width: "20rem",
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
            On dit qu'aujourd'hui une personne passe par deux reconversions
            professionnelles la dernière s'est terminée sur une blessure Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            blanditiis? Fuga inventore atque dignissimos recusandae accusamus
            doloribus harum, hic pariatur sunt, eius sint in magni nostrum, quos
            velit facere iure?
          </p>
          <p className="paragraph">
            On dit qu'aujourd'hui une personne passe par deux reconversions
            professionnelles la dernière s'est terminée sur une blessure Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            blanditiis? Fuga inventore atque dignissimos recusandae accusamus
            doloribus harum, hic pariatur sunt, eius sint in magni nostrum, quos
            velit facere iure?
          </p>
          <div className="cv-pic">
            <div
              onMouseOver={handleHover}
              onMouseOut={handleHover}
              style={cvBackground}
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
