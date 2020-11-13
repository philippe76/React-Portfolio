import React from "react";
import visitCount from '../visitorTracker'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <p className="footer paragraph">
        Copyright © {year} - Philippe Lanougadere - <span id='track'>{visitCount}</span>
      </p>
    </>
  );
};

export default Footer;
