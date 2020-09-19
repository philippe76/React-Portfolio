import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="App-header">
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        id="logo"
      >
        &lt; P.L / &gt;
      </Link>
      <div className="menu">
        <Link
          activeClass="active"
          to="profil"
          spy={true}
          smooth={true}
          offset={-300}
          duration={500}
          className="link"
        >
          Profil
        </Link>
        <Link
          activeClass="active"
          to="projet"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="link"
        >
          Projet
        </Link>
        <Link
          activeClass="active"
          to="cv"
          spy={true}
          smooth={true}
          offset={200}
          duration={-100}
          className="link"
        >
          CV
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-400}
          duration={500}
          className="link"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
