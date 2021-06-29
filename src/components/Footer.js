import React, {useState, useEffect} from "react";


const Footer = () => {

  const year = new Date().getFullYear();
  const [visitCount, setVisitCount] = useState()

  const updateVisitCount = () => {
    fetch('https://api.countapi.xyz/update/filip-dev/portfolio/?amount=1')
        .then(res => res.json())
        .then(res => {
            setVisitCount(res.value);
        })
  }

  useEffect(()=>{
    updateVisitCount()
  },[]);


  return (
    <>
      <p className="footer paragraph">
        Copyright © {year} - Philippe Lanougadere 
        {/* - <span id='track'>{visitCount}</span> */}
      </p>
    </>
  );

};

export default Footer;
