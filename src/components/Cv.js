import React, { useState } from "react";
import CV from "../images/CV.pdf";

const Cv = () => {
  // const [hover, setHover] = useState(false);

  // const handleHover = () => {
  //   setHover(!hover);
  // };

  // const download = {
  //   display: hover ? "block" : "none",
  // };

  // const cvBackground = {
  //   backgroundColor: hover && "rgba(0, 0, 0, 0.6)",
  //   position: hover && "absolute",
  // };

  return (
    <>
      <section className="box" id="cv">
        <h2 className="big-title"> {"Mon CV"} </h2>
        <div className="cv-container">
          <code>
            <pre className="skills">
            {`const hard_skills = {                
    HTML: 5,
    CSS: [3, "Bootstrap"],
    JavaScript: ["ES6", "jQuery", “ReactJs", “NodeJs"],
    responsive_design: true,
    version_control: "Git",
    IDE: "Visual Studio Code", 	
};

const soft_skills = ["Bosseur", "Positif", "Curieux", "Tenace"];

if (interested) {
    download(cv).then( infos => call_me(infos.tel) )
}; `}
          </pre>        
        </code>

          {/* <div className="cv-pic">
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
          </div> */}

          <a href={CV} download="Lanougadere_Philippe_CV" className="downloadCVMobile">
                  download CV
                </a>

        </div>
      </section>
    </>
  );
};

export default Cv;
