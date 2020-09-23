import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Project from "./components/Project";
import Cv from "./components/Cv";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="home">
      <Navbar />
      <Profile />
      <Project />
      <Cv />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
