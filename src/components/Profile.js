import React from "react";
import profile from "../images/profile.jpg";
import Stack from "./Stack";

const Profile = () => {
  return (
    <>
      <section className="profile-box">
        <div className="profile-card">
          <h2 className="profile-title">
          Développeur Front-End
          </h2>
          <p className="bio">
            Bonjour, je m'appelle Philippe Lanougadere.</p>
          <p className="bio">
            De formation autodidacte, je suis formateur en développement web depuis 3 ans
          </p>
          <p className="bio">
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
