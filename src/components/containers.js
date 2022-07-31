import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Containers({ imgname, name }) {
  return (
    <div className="container col-3">
      <div className="imgbox">
        <img src={imgname} alt="" />
      </div>
      <h3 className="text">{name}</h3>
    </div>
  );
}

export default Containers;
