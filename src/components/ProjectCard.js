import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";

const ProjectCard = ({background, title, tech, url, github}) => {

  return (
    <>
      <div
        className="project-card"
        style={{backgroundImage: `url(${background})`}}
      >
        <div className="project-info">
          <h2>{title}</h2>            
          <p> {tech}</p>
          <div>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <AiOutlineGlobal size={'2rem'} />
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaSquareGithub size={'2rem'} />
            </a>
          </div>            
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
