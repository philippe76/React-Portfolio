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

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  
  // const handleMouseMove = (event) => {
  //   event.persist()
  //   let lightZone = document.createElement('div');
  //   lightZone.classList.add('lightZone');
  //   lightZone.style.top = event.clientY + 'px';
  //   lightZone.style.left = event.clientX + 'px';
  //   document.body.prepend(lightZone);

  // } 

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <div id="home">
      {windowWidth > 1220 ? <Navbar /> : <Burger />}
      <Profile />
      <Project />
      <Cv />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
