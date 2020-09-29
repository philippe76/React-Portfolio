import React from "react";
// import { Document, Page, pdfjs } from "react-pdf";
import CV from "../images/CV.pdf";
import cvPic from "../images/cvPic2.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faExternalLinkAlt,
  faGraduationCap,
  faTruckMoving,
  faBoxOpen,
  faLaptopCode,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

const Cv = () => {
  // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <>
      <div className="box" id="cv">
        <h2 className="big-title"> {"[ Mon parcours ]"} </h2>
        <div className="cv-container">
          <FontAwesomeIcon icon={faGraduationCap} className="date" />
          <FontAwesomeIcon icon={faBoxOpen} className="date" />
          <FontAwesomeIcon icon={faEdit} className="date" />
          <FontAwesomeIcon icon={faTruckMoving} className="date" />
          <FontAwesomeIcon icon={faLaptopCode} className="date" />
        </div>
        <div className="cv-container">
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
        <div className="cv-container">
          <p className="paragraph">Bac L</p>
          <p className="paragraph">Manutention</p>
          <p className="paragraph">Management</p>
          <p className="paragraph">Poids-Lourd</p>
          <p className="paragraph">Programmation</p>
        </div>
      </div>
      <div className="box">
        <h2 className="big-title"> {"[ Mon CV ]"} </h2>
        <div className="cv-pic">
          <p className="paragraph">
            On dit qu'aujourd'hui une personne passe par deux reconversions
            professionnelles la dernière s'est terminée sur une blessure Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            blanditiis? Fuga inventore atque dignissimos recusandae accusamus
            doloribus harum, hic pariatur sunt, eius sint in magni nostrum, quos
            velit facere iure?
            {/* <a href={CV} download="Lanougadere_Philippe_CV">
            <FontAwesomeIcon icon={faDownload} />
          </a>
          <a href={CV}>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a> */}
          </p>

          <img src={cvPic} alt="" />
        </div>
        {/* <Document file={CV}>
          <Page pageNumber={1} />
        </Document> */}
      </div>
    </>
  );
};

export default Cv;
