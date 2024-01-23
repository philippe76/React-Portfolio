import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [linkText, setLinkText] = useState();
  const [target, setTarget] = useState();


  return (
    <nav className="App-header">
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
          offset={-150}
          duration={500}
          className="link"
        >
          {target === "CV" ? linkText : "CV"}
        </Link>
        {/* <Link
          activeClass="active"
          to="footer"
          spy={true}
          smooth={true}
          offset={-600}
          duration={500}
          className="link"
          onSetInactive
        >
          {target === "Footer" ? linkText : "Contact"}
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
