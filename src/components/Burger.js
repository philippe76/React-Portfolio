import React, { useState } from "react";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-scroll";

const Burger = () => {
  const [linkText, setLinkText] = useState();
  const [target, setTarget] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
 
  const handleHover = (e) => {
    setTarget(e.target.innerText);
    setLinkText("< " + e.target.innerText + " >");
  };

  const closeMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const stateChangeHandler = (newState) => {
    setMenuOpen(newState.isOpen)
  }

  return (
    <nav className="App-header">
            
      <Menu className="menu" right width={"100%"} isOpen={menuOpen} onStateChange={(state) => stateChangeHandler(state)}>
        <Link
          activeClass="active"
          to="profile"
          spy={true}
          smooth={true}
          offset={-300}
          duration={500}
          className="link menu-item"
          onClick={closeMenu}
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
          onClick={closeMenu}
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
          onClick={closeMenu}
        >
          {target === "CV" ? linkText : "CV"}
        </Link>
        <Link
          activeClass="active"
          to="footer"
          spy={true}
          smooth={true}
          offset={-350}
          duration={500}
          className="link menu-item"
          onMouseOver={handleHover}
          onMouseOut={handleHover}
          onClick={closeMenu}
        >
          {target === "Contact" ? linkText : "Contact"}
        </Link>
      </Menu>
    </nav>
  );
};

export default Burger;
