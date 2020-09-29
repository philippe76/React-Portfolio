import React from "react";
// import { Document, Page, pdfjs } from "react-pdf";
import CV from "../images/CV.pdf";
import cvPic from "../images/cvPic.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

const Cv = () => {
  // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div className="box" id="cv">
      <h2 className="big-title"> {"[ Mon CV ]"} </h2>
      <div className="cv-container">
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem iure commodi cupiditate, repellat dolorum quae soluta
          aperiam quia distinctio beatae debitis, non labore tempore? Illo eum
          numquam sapiente praesentium hic, vel rem ipsa, perferendis adipisci
          eligendi similique, libero assumenda laudantium ullam! Accusamus unde
          veritatis fugiat sint, a eius quasi magni enim molestiae reiciendis
          maxime. Nisi ex dolorem esse voluptates unde necessitatibus at!
          Laboriosam quisquam adipisci deleniti facilis similique sed temporibus
          <br />
          <a href={CV} download="Lanougadere_Philippe_CV">
            <FontAwesomeIcon icon={faDownload} />
          </a>
          <a href={CV}>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </p>

        <img src={cvPic} alt="" />

        {/* <Document file={CV}>
          <Page pageNumber={1} />
        </Document> */}
      </div>
    </div>
  );
};

export default Cv;
