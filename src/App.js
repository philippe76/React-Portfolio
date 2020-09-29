import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Project from "./components/Project";
import Cv from "./components/Cv";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [bigWidth, setbigWidth] = useState(true);

  // window.addEventListener("resize", () => {
  //   setbigWidth(!bigWidth);
  // });

  useEffect(() => {
    window.matchMedia("(max-width: 1220px)").matches && setbigWidth(false);
  }, [bigWidth]);

  return (
    <div id="home">
      {bigWidth ? <Navbar /> : <Nav />}
      <Profile />
      <Project />
      <Cv />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
