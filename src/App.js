import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Profil from "./components/Profil";
import Projet from "./components/Projet";
import Cv from "./components/Cv";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="home">
      <Navbar />
      <Profil />
      <Projet />
      <Cv />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
