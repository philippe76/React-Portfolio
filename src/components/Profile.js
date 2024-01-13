import React from "react";
import profile from "../images/profile.jpg";
import Stack from "./Stack";

const Profile = () => {
  return (
    <>
      <section className="profile-box" id="profile">
        <div className="profile-card">
          <h2 className="profile-title">
          Développeur Front-End
          </h2>
          <p className="profile-txt">
            Bonjour, je m'appelle Philippe Lanougadere.</p>
          <p className="profile-txt">
            De formation autodidacte, je suis formateur en développement web depuis 3 ans (3WA, Ifocop, Greta...)
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
