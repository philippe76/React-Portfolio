import React from "react";
import profile from "../images/profile.jpg";
import Stack from "./Stack";

const Profile = () => {
  return (
    <>
      <section className="profile-box" id="profile">
        <div className="profile-card">
          <h2 className="profile-title">Philippe LANOUGADERE</h2>
          <img src={profile} alt="profile pic" />
          <p className="paragraph">
            Développeur Web JavaScript. En reconversion professionnelle après un
            parcours de vie assez varié. Passé par le management et la conduite
            de poids lourds. Je prends aujourd'hui énormément de plaisir dans la
            programmation. J'ai choisi de me spécialiser dans JavaScript et son
            environnement, du front-end avec React Js au back-end avec Node Js.
          </p>
        </div>
        <Stack />
      </section>
    </>
  );
};

export default Profile;
