import React from "react";
import profil from "../images/profil.jpg";
import Stack from "./Stack";

const Profil = () => {
  return (
    <>
      <div className="box-container" id="profil">
        <div className="box">
          <img src={profil} alt="" />
          {/* <h2 className="box-title">Profil</h2> */}
          <div className="box-content">
            <h4>
              moi c'est <span id="profil-name">Philippe Lanougadere</span>
            </h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              debitis nisi ducimus voluptate delectus consectetur quisquam ut,
              excepturi animi autem facere? Assumenda harum est sint non nihil
              similique laboriosam quas debitis. Minima laudantium asperiores
              maiores quasi voluptates corrupti similique est. Magni voluptates
              aliquid odio cum amet nam modi voluptatibus voluptate saepe, ex
              nostrum enim distinctio sed tempora totam optio repudiandae,
              mollitia iure similique recusandae eveniet. Voluptatum maiores
              tempore repellendus aperiam! Exercitationem earum, fugiat harum
              rerum facilis delectus dolore quod assumenda perspiciatis
              voluptates esse dignissimos rem sed alias.
            </p>
          </div>
        </div>
      </div>
      <Stack />
    </>
  );
};

export default Profil;
