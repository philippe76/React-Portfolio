import React, { useState } from "react";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-scroll";

const Burger = () => {
  const [linkText, setLinkText] = useState();
  const [target, setTarget] = useState();

  const handleHover = (e) => {
    setTarget(e.target.innerText);
    setLinkText("< " + e.target.innerText + " >");
  };

  return (
    <nav className="App-header">
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        id="logo"
        className="menu-item"
      >
        &lt; P.L /&gt;
      </Link>
      <h2 className="profile-title">- Philippe LANOUGADERE -</h2>
      <Menu className="menu" right width={"100%"} disableAutoFocus>
        <Link
          activeClass="active"
          to="profile"
          spy={true}
          smooth={true}
          offset={-300}
          duration={500}
          className="link menu-item"
          onMouseOver={handleHover}
          onMouseOut={handleHover}
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
          className="link menu-item"
          onMouseOver={handleHover}
          onMouseOut={handleHover}
        >
          {target === "Projets" ? linkText : "Projets"}
        </Link>
        <Link
          activeClass="active"
          to="patchkwork"
          spy={true}
          smooth={true}
          offset={-350}
          duration={500}
          className="link menu-item"
          onMouseOver={handleHover}
          onMouseOut={handleHover}
        >
          {target === "CV" ? linkText : "CV"}
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-350}
          duration={500}
          className="link menu-item"
          onMouseOver={handleHover}
          onMouseOut={handleHover}
        >
          {target === "Contact" ? linkText : "Contact"}
        </Link>
      </Menu>
    </nav>
  );
};

export default Burger;
