import React from "react";
import ProjectCard from "./ProjectCard";
import projectsList from "../projectsList";
import underConstruction from "../images/bandes-jaunes.png"


const Project = () => {
  return (
    <section className="box" id="project">
      <h2 className="big-title">{"Mes Projets"} </h2>
      <div>
      <img src={underConstruction} alt="bande jaune site en travaux" />
        {/* {projectsList.map((item) => (
          <ProjectCard
            key={item.id}
            title={item.title}
            background={item.background}
            tech={item.tech}
            github={item.github}
            url={item.url}
            credits={item.credits}
          />
        ))} */}
      </div>
    </section>
  );
};

export default Project;
