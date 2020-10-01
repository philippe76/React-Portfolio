import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faTruckMoving,
  faBoxOpen,
  faLaptopCode,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

const PatchWork = () => {
  return (
    <section className="box" id="patchkwork">
      <h2 className="big-title"> {"[ Mon parcours ]"} </h2>
      <div className="patch-container">
        <FontAwesomeIcon icon={faGraduationCap} className="work-pic" />
        <p className="paragraph mobile-paragraph">Bac L</p>
        <FontAwesomeIcon icon={faBoxOpen} className="work-pic" />
        <p className="paragraph mobile-paragraph">Manutention</p>
        <FontAwesomeIcon icon={faEdit} className="work-pic" />
        <p className="paragraph mobile-paragraph">Management</p>
        <FontAwesomeIcon icon={faTruckMoving} className="work-pic" />
        <p className="paragraph mobile-paragraph">Poids-Lourd</p>
        <FontAwesomeIcon icon={faLaptopCode} className="work-pic" />
        <p className="paragraph mobile-paragraph">Programmation</p>
      </div>
      <div className="patch-container">
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
      </div>
      <div className="patch-container">
        <p className="paragraph">Bac L</p>
        <p className="paragraph">Manutention</p>
        <p className="paragraph">Management</p>
        <p className="paragraph">Poids-Lourd</p>
        <p className="paragraph">Programmation</p>
      </div>
    </section>
  );
};

export default PatchWork;
