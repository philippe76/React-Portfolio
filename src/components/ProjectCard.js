import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = (props) => {
  const [hover, setHover] = useState(true);

  const infoStyle = {
    display: hover ? "none" : "block",
  };

  const divStyle = {
    backgroundColor: !hover && "rgba(0, 0, 0, 0.8)",
    position: !hover && "absolute",
  };

  const handleChange = () => {
    setHover(!hover);
  };

  return (
    <>
      <div
        className="project-card"
        onMouseOver={handleChange}
        onMouseOut={handleChange}
        style={{ background: `center / contain no-repeat url(${props.background})`, backgroundColor: 'gainsboro' }}
      >
        <div style={divStyle} className="inner-box">
          <div style={infoStyle} className="project-info">
            <h2 className="big-title">{props.title}</h2>
            <p className="paragraph">🛠 {props.tech}</p>
            <p>
              <a href={props.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>

              <a href={props.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </p>
            <p className="paragraph">credits: {props.credits}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
