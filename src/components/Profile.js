import React from "react";
import profile from "../images/profile.jpg";
import Stack from "./Stack";

const Profile = () => {
  return (
    <>
      <section className="profile-box" id="profile">
        <div className="profile-card">
          <h2 className="profile-title desktop">
          Développeur Front-End
          </h2>
          <h2 className="profile-title mobile">
          Développeur <br/> Front-End
          </h2>
          <p className="profile-txt">
            Bonjour, je m'appelle <strong>Philippe Lanougadere</strong>.</p>
          <p className="profile-txt">
            Autodidacte, je suis <strong>formateur </strong> en <strong>développement web</strong> depuis 3 ans (<em>3WA</em>, <em>Ifocop</em>, <em>Greta</em>...)
          </p>
          <p className="profile-txt">
            Adepte de nouveaux challenges, je cherche un cadre innovant dans lequel les relever
          </p>
        </div>
        <img src={profile} alt="profile pic" />
      </section>
      <Stack />
    </>
  );
};

export default Profile;
