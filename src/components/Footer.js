import React, {useState, useEffect} from "react";


const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <>
      <p className="footer paragraph">
        Copyright © {year} - Philippe Lanougadere 
      </p>
    </>
  );

};

export default Footer;
