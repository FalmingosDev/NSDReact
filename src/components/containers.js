import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from '../../node_modules/react-bootstrap/Card'

function Containers({ imgname, name }) {
  return (
            <Card style={{borderRadius: "10px"}}>
            <Card.Img variant="top" src={imgname} />
              <center><Card.Footer className="text_footer">{name}</Card.Footer></center>
            </Card>
  );
}

export default Containers;