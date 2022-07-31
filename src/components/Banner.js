import React from "react";
import './bannertext.css'

function Banner({ name }) {
  return (
    <div className="bannerContent">
    <h3>Hi {name}</h3>
      <p>Welcome to the Smart Future.</p>
    </div>
  );
}

export default Banner;
