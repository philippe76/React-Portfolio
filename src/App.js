import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Project from "./components/Project";
import Cv from "./components/Cv";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Burger from "./components/Burger";
import sunIcon from "./images/sun.png";
import moonIcon from "./images/moon.png";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [lightModeActive, setLightModeActive] = useState(false);
  
  const handleDarkMode = function() {
    setLightModeActive(prev => !prev);
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <div id="home" className={lightModeActive ? 'lightMode' : ''}>
      {windowWidth > 1220 ? <Navbar /> : <Burger />}
      <img src={lightModeActive ? moonIcon : sunIcon} alt="icône pour le mode sombre" id="darkModeIcon" onClick={handleDarkMode}/>
      <Profile />
      <Project />
      <Cv />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
