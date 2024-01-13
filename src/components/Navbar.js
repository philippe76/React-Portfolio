import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [linkText, setLinkText] = useState();
  const [target, setTarget] = useState();


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
        &lt; P.L /&gt;
      </Link>
      <div className="menu">
        <Link
          activeClass="active"
          to="profile"
          spy={true}
          smooth={true}
          offset={-300}
          duration={500}
          className="link"
        >
          {target === "Profil" ? linkText : "Profil"}
        </Link>
        <Link
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          offset={-300}
          duration={500}
          className="link"
        >
          {target === "Projets" ? linkText : "Projets"}
        </Link>
        <Link
          activeClass="active"
          to="cv"
          spy={true}
          smooth={true}
          offset={-350}
          duration={500}
          className="link"
        >
          {target === "CV" ? linkText : "CV"}
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-300}
          duration={500}
          className="link"
        >
          {target === "Contact" ? linkText : "Contact"}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
