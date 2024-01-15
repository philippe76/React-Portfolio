import React from "react";


const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer id="footer">
      <p className="footer-text">
        Copyright © {year} - Philippe Lanougadere 
      </p>
    </footer>
  );

};

export default Footer;
