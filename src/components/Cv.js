import React from "react";
import CV from "../images/CV.pdf";

const Cv = () => {

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

          <a href={CV} download="Lanougadere_Philippe_CV" className="downloadCV">
                  download CV
                </a>

        </div>
      </section>
    </>
  );
};

export default Cv;
