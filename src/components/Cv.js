import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import CV from "../images/CV.pdf";

const Cv = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div className="box" id="cv">
      <h2> {"[ Mon CV ]"} </h2>

      <Document file={CV} onLoadError={(error) => console.log(error.message)}>
        <div className="cv-background">
          <Page pageNumber={1} />
        </div>
      </Document>
    </div>
  );
};

export default Cv;
