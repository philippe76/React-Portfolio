import React from "react";
import CV from "../images/Lanougadere_Philippe_CV.pdf";

const Cv = () => {

  return (
    <>
      <section className="box" id="cv">
        <h2 className="big-title"> Mon CV </h2>
        <div className="cv-container">
          <code>
            <pre className="skills">
            {`const hardSkills = {                
    CSS: ['Bootstrap', 'SASS'],
    JavaScript: ['ES6', 'jQuery', 'React'],
    Responsiveness: true,
    Versionning: 'Git',
    IDE: 'VSCode' 	
};

const softSkills = ['Positif', 'Curieux', 'Tenace'];

if (interested) {
    download(cv)
     .then( infos => callMe(infos.tel) )
}; `}
          </pre>        
        </code>

          <a href={CV} className="downloadCV">
                  download CV
                </a>

        </div>
      </section>
    </>
  );
};

export default Cv;
